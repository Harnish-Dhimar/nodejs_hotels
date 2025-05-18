import db from './db.js'
import express from 'express'
import personRoute from './routes/personRoute.js'
import menuRoute from './routes/menuRoute.js'
import dotenv from 'dotenv'
dotenv.config({
    path:'./.env'
})

const app = express()
const port = process.env.PORT
app.use(express.json())


app.use('/person',personRoute)
app.use('/menu',menuRoute)



app.listen(port,()=>{
    console.log(`Server is ruuning on ${port}`);
    
})