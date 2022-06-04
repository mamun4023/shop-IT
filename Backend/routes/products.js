const express = require('express');
const router = express.Router();
const {getProduct, addProduct, getSingleProduct} = require('../controllers/productController');

router.get('/products', getProduct);
router.post('/product', addProduct);
router.get('/product', getSingleProduct);



module.exports = router;
