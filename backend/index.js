const express = require ('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes/index')

const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
 }
));
app.use(express.json({limit:"50mb"}))
app.use(cookieParser())
app.use('/api',router)

const PORT =  process.env.PORT || 8080;
//if the server is connected to data base run the server
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log('server is running')
    })
})

