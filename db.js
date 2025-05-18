import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({
    path:'./.env'
})
//connection

mongoose.connect(process.env.MONGOURL)

//Get the default connection
//MongoDB maintains default connection object represnting mongodb connection
const db = mongoose.connection;

//Define event listeners for database connection
db.on('connected',()=>{
    console.log("Connected to mongoDB database");
    
})

db.on('disconnected',()=>{
    console.log("Disconnected to mongoDB database");
    
})

export default db