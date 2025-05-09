const express = require ('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes/index')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api',router)

const PORT = 8080 || process.env.PORT
//if the server is connected to data base run the server
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log('server is running')
    })
})

