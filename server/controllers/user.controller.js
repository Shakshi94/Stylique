const User = require('../modal/user.modal.js');
const { createSecretToken } = require('../utils/secretToken');
const bcrypt = require('bcryptjs');
const Product = require('../modal/product.modal.js');

module.exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    if (role === 'admin') {
      const adminExists = await User.findOne({ role: 'admin' });
      if (adminExists) {
        return res.status(403).json({ message: 'Admin already exists.' });
      }
    }

    const newUser = await User.create({
      email,
      name,
      password,
      role,
    });

    const token = createSecretToken(newUser._id);
    res.cookie('token', token, {
      withCredentials: true,
       sameSite: "None",
       httpOnly: false,
       secure:false,
    });

    res.status(201).json({
      message: 'User created successfully',
      success: true,
      user: newUser,
      
    });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

module.exports.login = async (req, res) => {

    try{
        const {email,password} = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Incorrect password or email' });
        }

        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.status(403).json({ message: 'Incorrect password or email' });
        }

        const token = createSecretToken(user._id);
        res.cookie('token', token, {
            withCredentials: true,
            httpOnly: false,
            sameSite: "None",
            secure:false,
        });
        res.status(200).json({
            message: 'User logged in successful',
            role: user.role,
            success: true,
            user:user
        });

    }catch (err) {
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
};

module.exports.logout = async (req, res) => {
  try {
    res.clearCookie('token', { withCredentials: true, httpOnly: false });
    res.status(200).json({ message: 'User logged out successfully', success: true });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json(products);
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

module.exports.getProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

  
