const app = require('./app');
const dotenv = require('dotenv').config();
const DbConnection = require('./db');

// handle uncaught exception
process.on('uncaughtException', err =>{
    console.log("ERROR", err.stack);
    console.log("Shutting down due to uncaught exception");
    process.exit(1);
})

// make db connection 
DbConnection();


const server =  app.listen(process.env.PORT, ()=>{
    console.log("server is running at", process.env.PORT);
})


// handle unhandled promise rejections
process.on('unhandledRejection', err=>{
    console.log("ERROR ",err.message);
    console.log("shutting down the server due to unhandled promise rejection");
    server.close(()=>{
        process.exit(1)
    })
})