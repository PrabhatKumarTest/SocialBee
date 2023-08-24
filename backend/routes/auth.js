const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchuser");

router.get("/", (req, res) => {
  res.send("Hello from router user");
});

// Creating a user
router.post(
  "/createuser",
  [
    body("name", "name can not be blank").notEmpty(),
    body("username", "username can not be blank").notEmpty(),
    body("email", "enter a valid email").isEmail(),
    body("password", "password can not be blank").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    //condition that checks if there are any error. which return the error
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { email, password, name, username } = req.body;
      // Generating a secured password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // check if user already exists
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).send("User Already Exist");
      }

      // Creating a new user with secured password
      const newUser = await new User({
        name: name,
        username: username,
        email: email,
        password: hashedPassword,
      });

      // saving the new user with hashed password in database
      (await newUser.save()) && res.status(200).send(newUser);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
);

// Login user
router.post(
  "/login",
  [
    body("email", "enter a valid email").isEmail(),
    body("password", "password can not be blank").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    //condition that checks if there are any error. which return the error
    if (!errors.isEmpty()) {
      return res.status(404).json({ errors: errors.array() });
    }
    try {
      const { email, password } = req.body;

      // check if user does not exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send("User Does Not Exist");
      }

      // Decrypting password from password
      const comparedPassword = await bcrypt.compare(password, user.password);
      if (!comparedPassword) {
        return res.status(400).send("Wrong Credentails, Please Login Again");
      }
      // If user is logged in sharing a jwtToken with the user
      const data = {
        user: {
          id: user.id,
        },
      };
      const jwtToken = await jwt.sign(data, process.env.JWT_PVT_KEY);
      res.json({ jwtToken });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
);

// fetch user



module.exports = router;
