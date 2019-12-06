const express = require("express")

const router = express.Router()

//  @route  GETt api/contacts
//  @desc   Get all of the contacts from one user
//  @access Private
router.get("/", (req, res) => {
  res.send("Get all of the contacts from one user")
})

//  @route  POST api/contacts
//  @desc   add contact
//  @access Private
router.post("/", (req, res) => {
  res.send("add contact")
})

//  @route  PUT api/contacts/:id
//  @desc   update contact
//  @access Private
router.put("/:id", (req, res) => {
  res.send("update contact")
})

//  @route  DELETE api/contacts
//  @desc   delete contact
//  @access Private
router.delete("/:id", (req, res) => {
  res.send("delete contact")
})

module.exports = router
