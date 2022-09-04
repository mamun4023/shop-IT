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
        trim : true,
        maxlength : [5, "Product name cannot exceed 5 characters"],
        default : 0.00
    },
    description : {
        type : String,
        required : [true, "please enter product description"],
    },
    rattings : {
        type : Number,
        default : 0
    },

    images : [
        {
            public_id :  {
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
        required : [true, "please enter product category"],
        enum : {
            values : [
                'Electronics',
                'Cameras',
                'Accessories',
                'Headphone',
                'Food',
                'Books',
                'clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message  : "Please select corrent category for product"
        }
    },
    seller : {
        type : String,
        required : [true, 'Please enter product seller']
    },
    stock : {
        type : Number,
        required : [true, 'please enter product stock'],
        maxLength  : [5, 'Product name cannot exceed 5 characters'],
        default : 0
    },
    numOfReviews :  {
        type : Number,
        default : 0
    },
    reviews :  [
        {
            name : {
                type : String,
                required : true 
            },
            ratting : {
                type : Number,
                required : true
            },
            comment : {
                type : String,
                required : true
            }
        }
    ],
    createdAt : {
        type : Date,
        default : Date.now()
    }
})


module.exports = mongoose.model('Product', productSchema)