const express = require('express')
const port = 9000;
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const cookieparser = require('cookie-parser')
require('dotenv').config();
const authrouter = require('./routes/auth')
const postrouter = require('./routes/posts')
const userrouter = require('./routes/users')
app.use(express.json());
app.use(cors());
app.use(cookieparser())


const connection = async(next) => {
    try { 
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`database is connected...`);
    } catch (error) {
        next(error);
    }
}
app.use('/auth',authrouter)
app.use('/posts',postrouter)
app.use('/users',userrouter);
connection()
app.listen(port,() => {
    console.log(`server running on port ${port}...`);
})