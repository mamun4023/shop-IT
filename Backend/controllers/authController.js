const User  = require('../models/user');

const ErrorHandler = require('../utils/errorsHandler');
const catchAsyncError = require('../middleware/catchAsyncError');

//register a user 
exports.registerUser = catchAsyncError(async (req, res, next)=>{

    const {name, email, password} = req.body;

    const respones =  await User.findOne({email : email})
    if(respones){
        return res.status(300).json({
            success : false,
            message : "User already exist with this email"
        })
    }

    const user = await User.create({
        name,
        email,
        password,
        avatar : {
            public_id : 'avatars/dfdfdluter',
            url : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
        }
    })

    const Token = user.getJwtToken();


    res.status(201).json({
        success : true,
        message : "Registration successfull",
        token : Token,
        user
    })

})


// login user
exports.loginUser = catchAsyncError(async (req, res, next)=>{
    const {email, password} = req.body;
    if(!email|| !password){
        return res.status(400).json({
            success : false,
            message : "Please enter email & password"
        })
    }

    // find user in database
    const user = await  User.findOne({email}).select('+password')

    if(!user){
        return res.status(401).json({
            success : false,
            message : "User not find"
        })
    }

    const isPasswordMatched =  await user.comparePassword(password);

    if(!isPasswordMatched){
        return res.status(401).json({
            success : false,
            message : "Password is not correct"
        })
    }
  
    const Token = user.getJwtToken();
    res.status(200).json({
        success : true,
        token : Token
    })
}) 