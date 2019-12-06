const express = require("express")
//bring in express to use router
const router = express.Router()
//bringin in express library validation functionality
const { check, validationResult } = require("express-validator")

const User = require("../models/User")

//signature for each route
//  @route  POST api/user
//  @desc   Register a user
//  @access Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a password with 6 characters").isLength({
      min: 6
    })
  ],
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    res.send("passed")
  }
)

//  '/' is now api/use

module.exports = router
