const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcrypt');

router.get("/", (req, res) => {
  res.send("Hello from router user");
});

// Creating a user 
router.post(
  "/singup",
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
        name : name,
        username : username,
        email : email,
        password : hashedPassword,
      });
      
      // saving the new user with hashed password in database
      await newUser.save() && res.status(200).send(newUser);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
);

module.exports = router;
