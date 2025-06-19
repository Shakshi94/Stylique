const Product = require('../modal/product.modal.js');
const  mongoose = require( "mongoose");
const upload = require('../cloudConfig.js');

module.exports.addProduct = async (req, res) => {
  try {

    const productData = req.body;
    const { name, desc, price, sizes, categories } = productData;
    const image = req.file?.path;
    // Ensure these are always arrays
    const parsedSizes = Array.isArray(sizes) ? sizes : [sizes];
    const parsedCategories = Array.isArray(categories) ? categories : [categories];
        
    if (!name || !desc || !image || !price || !sizes || !categories) {
      return res.status(400).json({ message: 'Missing required product fields' });
    }

    const product = new Product({
      name,
      desc,
      image,
      price,
      sizes:parsedSizes,
      categories:parsedCategories
    });

    const createdProduct = await product.save();

    return res.status(201).json({ message: "Product added successfully", success: true, product: createdProduct });

  } catch (err) {
    return res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(201).json(products);
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productData = req.body;
    const { name, desc, price, sizes, categories } = productData;
    const image = req.file?.path;
    const parsedSizes = Array.isArray(sizes) ? sizes : [sizes];
    const parsedCategories = Array.isArray(categories) ? categories : [categories];

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    const updatedFields = {
       name, 
       desc, 
       price,
      sizes:parsedSizes, 
      categories:parsedCategories,
      ...(image && { image }) ,
    };

    const updatedProduct = await Product.findByIdAndUpdate(id, updatedFields, {
      new: true,
      runValidators: true,
      upsert: false,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
      success: true,
    });
  } catch (err) {
    console.error("Update failed:", err);
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

module.exports.deleteProduct = async (req,res) =>{
    try {
        const { id } = req.params;
    
        if (!mongoose.isValidObjectId(id)) {
          return res.status(400).json({ message: "Invalid product ID" });
        }
    
        const deletedProduct = await Product.findByIdAndDelete(id);
    
        if (!deletedProduct) {
          return res.status(404).json({ message: "Product not found" });
        }
    
        return res.status(200).json({
          message: "Product deleted successfully",
          success: true,
          product: deletedProduct,
        });
      } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
      }
}
