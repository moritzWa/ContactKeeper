//veryfiing token for protected routes

const jwt = require("jsonwebtoken")
const config = require("config") //access to the secret

module.exports = function(req, res, next) {
  //Get token from Header
  const token = req.header("x-auth-token")

  //check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token. Authorization denied" })
  }

  //decode if token
  try {
    //verify and pull info out of payload
    const decoded = jwt.verify(token, config.get("jwtSecret"))

    //assigning user with token to request object
    req.user = decoded.user

    next()
  } catch (err) {
    console.log(err.message)
    res.status(401).json({ msg: "Token is not valid" })
  }
}
