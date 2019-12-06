const express = require("express")
//bring in express to use router

const router = express.Router()

//signature for each route
//  @route  POST api/user
//  @desc   Register a user
//  @access Public
router.post("/", (req, res) => {
  res.send("Register a user")
})
//  '/' is now api/user

module.exports = router
