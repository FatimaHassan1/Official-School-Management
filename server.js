require('dotenv').config()
const express = require("express");
const myapp = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path')
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");



myapp.use("/" , cors());
myapp.use(express.json());
// app.use(sessionMiddleWare)

// connect mongodb
const URI = process.env.MONGODB_URL
// const URI =  "mongodb://localhost:27017/ldap"

// Connect to mongod
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, err => {
    if(err) throw err;
    console.log("Connected to mongodb")
})

// get rout
myapp.use(require("./router/authtwo"));
myapp.use(require("./router/auth"));

const PORT = process.env.PORT || 8000

// production
if (process.env.NODE_ENV === 'production') {
    myapp.use(express.static('client/build'));
    myapp.get('*' , (req , res) => {
        res.sendFile(path.join(__dirname , 'client' , 'build' , 'index.html'))
    })
}

// const test = myapp.listen(PORT , "0.0.0.0")
// console.log(test)

myapp.listen(PORT , () => {
    console.log("Server has started");
})