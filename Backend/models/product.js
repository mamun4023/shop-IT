const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please enter product name"],
        trim : true,
        maxlength : [100, "Product name cannot exceet 100 characters"]
    },
    price : {
        type : Number,
        required : [true, "Please enter product price"],
        maxlength : [5, "Product name cannot exceed 5 characters"]
    },
    description : {
        type : String,
        required : [true, "please enter product description"],
    },
    category : {
        type : String,
        required : [true, "please enter product category"],
    }
})


module.exports = mongoose.model('Product', productSchema)