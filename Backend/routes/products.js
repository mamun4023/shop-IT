const express = require('express');
const router = express.Router();
const {getProduct, addProduct, getSingleProduct, deleteProduct, updateProduct } = require('../controllers/productController');

router.post('/product', addProduct);
router.get('/products', getProduct);
router.get('/product/:id', getSingleProduct);
router.delete('/product/:id', deleteProduct )
router.put('/product/update/:id', updateProduct)


module.exports = router;
