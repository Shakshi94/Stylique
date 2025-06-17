const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Name is required"]
    },
    email: {
        type: String,
        required: [true,"Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true,"Password is required"]
    },
    role:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date
    },

    isActive: {
        type: Boolean,
        default: true
    }
});

userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 12);
  });
  

module.exports = mongoose.model('User', userSchema);