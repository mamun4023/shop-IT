const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please enter you name"],
        maxlength : [30, "your name cannot exceed 30 characters"]
    },

    email : {
        type : String,
        required : [true, "Please enter your email"],
        unique : true,
        validate : [validator.isEmail, "Pleaese enter valid email address"],
    },
    password : {
        type : String,
        required : [true, "Please enter password"],
        minlength : [6, "Your password must be longer than 6 character"],
        select : false
    },
    avatar : {
        public_id : {
            type : String,
            required : true,

        },
        url : {
            type : String,
            required : true
        }
    },
    role : {
        type : String,
        default : "user"
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    resetPasswordToken : String,
    resetPasswordExpire : Date,

})

userSchema.pre('save', async function (next){
     if(!this.isModified('password')){
        next();
     }

     this.password = await bcrypt.hash(this.password, 10)
})


userSchema.methods.getJwtToken = function(){
    return jwt.sign({id : this._id }, "secret", {
        expiresIn : "7d"
    })
}


userSchema.methods.comparePassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}


const UserModal = mongoose.model('User', userSchema)
module.exports = UserModal