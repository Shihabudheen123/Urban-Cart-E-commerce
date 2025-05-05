const express = require ('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')

const app = express()
app.use(cors())

const PORT = 8080 || process.env.PORT
//if the server is connvected to data base run the server
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log('server is running')
    })
})

