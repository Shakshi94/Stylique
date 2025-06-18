const  mongoose = require( "mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required:true
    },
    desc:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },

    sizes: {
        type: [String],
        default: [],
    },
    categories: {
        type: [String],
        default: [],
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    
    updatedAt: {
        type: Date
    },

    isActive: {
        type: Boolean,
        default: true
    }
   
});

module.exports = mongoose.model('Product',productSchema);