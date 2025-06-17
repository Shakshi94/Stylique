require("dotenv").config();
const jwt = require("jsonwebtoken");
module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: 7 * 24 * 60 * 60, // 7 days
  });
}