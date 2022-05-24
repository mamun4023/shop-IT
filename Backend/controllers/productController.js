const product = require("../models/product");


exports.addproduct = (req, res)=>{
    
}

exports.getProduct = (req, res)=>{
    res.status(200).json({
        success : true,
        message : "Show All products"
    })
}

