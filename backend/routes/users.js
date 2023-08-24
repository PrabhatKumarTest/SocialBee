const express = require("express");
const fetchUser = require("../middleware/fetchuser");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  res.send("Hello from router auth");
});


// Fetch User Information
router.post("/getuser", fetchUser, async (req, res) => {
  try{
  const user = await User.findById(req.user.id).select('-password -isAdmin')
  res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" })
}
});

// Update User Information
router.put("/updateuser/:id", fetchUser, async (req, res) => {
  try {
    if (req.user.id.toString() === req.params.id || req.user.isAdmin) {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = await hashedPassword;
      }
      try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
          $set: req.body,
        });
        const updatedUser = await User.findById(user.id);
        res.send(updatedUser);
      } catch (error) {
        res.status(500).json(error);
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete User
router.delete("/deleteuser/:id", fetchUser ,async (req, res) => {
  try {
    if (req.user.id.toString() === req.params.id || req.user.isAdmin) {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ sucess: "Deleted Sucessfully", user });
    }
  } catch (error) {
    res.status(500).json(error);
    console.log(error)
  }
});

module.exports = router;
