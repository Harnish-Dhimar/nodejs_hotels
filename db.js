import mongoose from 'mongoose'

//connection
const mongoURL = 'mongodb://localhost:27017/hotels';
mongoose.connect(mongoURL)

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