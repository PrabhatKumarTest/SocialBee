const express = require("express");
const fetchUser = require("../middleware/fetchuser");
const router = express.Router();
const Info = require("../models/Info");

// Get User Details
router.get("/getdetails", fetchUser, async (req, res) => {
    try {
        const details = await Info.find({user: req.user.id})
        console.log(details);
        if(details.length === 0){
           return res.status(404).send("Details Not Avaliable")
        }
        res.status(200).json(details)

    } catch (error) {
        res.send(500).josn(error)
    }
});

// Add User Details
router.post("/adddetails", fetchUser, async (req, res) => {
  try {
    const { description, city, hometown } = req.body;
    const details = new Info({
      user: req.user.id,
      description,
      city,
      hometown,
    });
    const userDetails = await details.save();
    res.status(200).json(userDetails);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// Update User Details
    router.put('/updatedetails/:id', fetchUser, async (req, res) => {
   try {
    let info = await Info.findById(req.params.id)
    if (!info){
        return res.status(404).send("No Previous Information Found, please add details")
    }
    if (info.user.toString() === req.user.id) {
        info = await Info.findByIdAndUpdate(req.params.id, req.body, {$set: req.body})
        const updateDetails = await Info.findById(info._id)
        res.status(200).json(updateDetails)
    }
   } catch (error) {
    res.status(400).json(error.message)
   }
})

// follow other user


// followers 

module.exports = router;
