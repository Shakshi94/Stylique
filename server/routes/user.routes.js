const express = require('express');
const router=express.Router();
const userController = require('../controllers/user.controller.js');
const {verifyToken} = require('../middleware/middleware.js');

router.post('/register',userController.register);

router.post('/login',userController.login);

router.get('/logout',userController.logout);



router.get('/showproducts',userController.getAllProducts);
router.get('/showproducts/:id',userController.getProduct);


module.exports = router;