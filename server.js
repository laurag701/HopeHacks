<<<<<<< HEAD
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//connect to database 
mongoose.connect('mongodb+srv://hyeb96:Sm17emina@cluster0.yyfegbj.mongodb.net/hopehack', { useNewUrlParser: true }, { useUnifiedTopology: true })

//create schema 
const contactSchema = {
    name: String,
    email: String,
    message: String
}

//create model
const contact = mongoose.model("contact", contactSchema)

app.post("/contact", (req, res) => {
    let newContact = new contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    newContact.save();
    res.redirect('/');
})

app.use(express.static(__dirname + '/public'));


// for ejs files 
app.set("view engine", "ejs")

//route
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/contact.html'));
})

//importing users routers and set it to starts with 'users'
// const userRouter = require('./routes/users')
// app.use('/users', userRouter)

//create a server 
app.listen(3000)
=======
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


mongoose.connect("mongodb+srv://PaginesHer:RSkF4TyWXLY9L5kJ@cluster0.leqz7ho.mongodb.net/?retryWrites=true&w=majority");

//create data schema


app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname +"/contact.html");
})

//app.post
app.post("/contact_form",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
   

    var data = {
        "name": name,
        "email" : email,
        "message": message,
        
    }
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('contact.html')

})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('contact.html');
}).listen(3000);


console.log("Listening on PORT 3000");
>>>>>>> parent of 33c57fd... edited footer
