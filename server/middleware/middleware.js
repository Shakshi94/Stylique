const User = require('../modal/user.modal.js');
require("dotenv").config();
const jwt = require('jsonwebtoken');

module.exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: 'Token is missing' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token', error: err.message });
      }

      const user = await User.findById(data.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      req.user=user;
      next(); 
    });

  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};
