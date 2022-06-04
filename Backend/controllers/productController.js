const Product = require("../models/product");
const ErrorHandler = require('../utils/errorsHandler');
const APIFeatres = require('../utils/apiFeatures');
const CatchAsyncError = require('../middleware/catchAsyncError');
exports.addProduct = CatchAsyncError( async (req, res, next)=>{

    const response = await Product.findOne({name : req.body.name});

    if(response?.name === req.body.name){
      return res.status(201).json({
        success : false,
        message : "Product with name is alrady exist"
        })
    }

    const product = await Product.create(req.body);
       return res.status(200).json({
        success : true,
        message : "Product saved successfully",
        product
    })
})


// get all products
exports.getProduct = async (req, res)=>{
    const rowPerPage = 2;
    const apiFeatures = new APIFeatres(Product.find(), req.query)
                        .search()
                        .filter()
                        .pagination(rowPerPage)
    
    const AllProducts = await apiFeatures.query;
         
    res.status(200).json({
        success : true,
        message : "Show All products",
        AllProducts
    })
}

// get single products
exports.getSingleProduct = async (req, res, next) =>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404))
    }
}

