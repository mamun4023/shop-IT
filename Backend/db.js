const mongoose = require('mongoose');

const DB_Connection = ()=>{
    mongoose.connect(process.env.DB_ULR, (err)=>{
        if(!err){
            console.log("DB conected")
        }
    })
}

module.exports = DB_Connection;
