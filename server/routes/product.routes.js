const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../cloudConfig');
const upload = multer({ storage });
const {verifyToken,verifyAdmin} = require('../middleware/middleware');
const productController  = require('../controllers/product.controller');

router.post('/add',verifyToken,verifyAdmin,upload.single('image'), productController.addProduct);
router.get('/show',verifyToken,verifyAdmin,productController.getAllProducts);
router.put('/edit/:id',verifyToken,verifyAdmin,upload.single('image'), productController.updateProduct);
router.delete('/delete/:id',verifyToken,verifyAdmin, productController.deleteProduct);

module.exports = router;