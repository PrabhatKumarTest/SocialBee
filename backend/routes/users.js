const express = require('express')
const router = express.Router()


router.get("/", (req, res) => {
  res.send("Hello from router auth")
})

// Create User Information
router.put('/updateuserinfo:id', async (req, res) => {
  try {
    const { email} = req.body
    if (email === req.params.id || req.body.isAdmin) {
            
    } else {
      
    }
  } catch (error) {
    
  }
})
// Fetch User Information
router.put('/:id', async (req, res) => {
  
})

// Update User Information
router.put('/:id', async (req, res) => {
  
})

// Delete User 
router.put('/:id', async (req, res) => {
  
})

// follow other User 
router.put('/:id', async (req, res) => {
  
})

// Unfollow other User 
router.put('/:id', async (req, res) => {
  
})
module.exports = router