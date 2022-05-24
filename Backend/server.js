const app = require('./app');
const dotenv = require('dotenv').config();
const DbConnection = require('./db');

// make db connection 
DbConnection();


app.listen(process.env.PORT, ()=>{
    console.log("server is running at", process.env.PORT);
})