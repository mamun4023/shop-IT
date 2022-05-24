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
    ratings : {
        type : Number,
        default : 0
    },
    images : [
        {
            public_id : {
                type : String,
                required : true,

            },
            url : {
                type : String,
                required : true
            }
        }
    ],

    category : {
        type : String,
        required : [true, "Please Select Category for this product"],
        enum : [
            "Electroics",
            "Cameras",
            "Laptop",
            "Acccessories",
            "HeadPhone",
            "Food",
            "Books",
            "clothes/shoes",
            "sports",
            "outdoor",
            'Home'
        ],
        message : "please select correct category for product"
    },
    seller : {
        type : String,
        required : [true, "Please enter product seller"]
    },
    stock : {
        type : Number, 
        required : [true, 'Please enter product stock'],
        maxLength : [5, "Product name cannot exceed 5 characters"],
        default : 0
    },
    numOfReveiws : {
        type : Number,
        default : 0
    },
    reviews : [
        {
            name : {
                type : String,
                required : true,
            },
            ratting : {
                type : Number,
                required : true,
            },
            comment : {
                type : String,
                required : true
            }
        }
    ],
    createdAt : {
        type : Date,
        default : Date.now
    }
})


module.exports = mongoose.model('Product', productSchema)