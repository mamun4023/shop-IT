const ErrorHandler = require('../utils/errorsHandler');
const dotenv = require('dotenv').config();

module.exports = (err, req, res, next)=>{
    err.statusCode = err.statusCode || 500;


    // for development mode
    // if(process.env.NODE_ENV === "DEVELOPMENT"){
    //     res.status(err.statusCode).json({
    //         success : true,
    //         error : err,
    //         errMessage : err.message,
    //         stack : err.stack
    //     })
    // }

     // for production mode
    // if(process.env.NODE_ENV === "PRODUCTION"){
    //     let error = {...err};
    //     error.message = err.message
    //     res.status(error.statusCode).json({
    //         success : false,
    //         message : error.message || 'Internal server Error'
    //     })
    // }

    let error = {...err};
    error.message = err.message
    res.status(error.statusCode).json({
        success : false,
        message : error.message || 'Internal server Error'
    })
}