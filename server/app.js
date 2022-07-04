const express = require('express'); //require imports express packages
const mongoose = require('mongoose'); //requires imports mongoose packages
const bodyParser = require('body-parser'); // require imports bodyParser middleware 
require("dotenv/config"); //importing configuration 
const app = express();  //runs express function
app.use(bodyParser.json()); //using middleware and telling to read json files
const postRoute = require('./routes/post.js');
app.use('/posts', postRoute);
app.get('/',(req, res) => { //getting a request and outputting a response
    res.send('you are connected'); 
})
app.get("/posts",(req, res) => { //posting the route to http request
    res.send('we are in post');
})
//connect to db
mongoose.connect(process.env.DB_CONNECTION,()=>{ //mongoose is the db
    console.log('connected to db');
})
app.listen(3000); //telling to listen on port 3000
