const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../cloudConfig');
const upload = multer({ storage });
const {verifyToken} = require('../middleware/middleware');
const productController  = require('../controllers/product.controller');

router.post('/add',upload.single('image'), productController.addProduct);
router.get('/show',productController.getAllProducts);
router.put('/edit/:id',upload.single('image'), productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;