const express = require('express');
const router = express.Router();
const {getProduct, addproduct} = require('../controllers/productController');

router.get('/products', getProduct);
router.post('/product', addproduct);


module.exports = router;
