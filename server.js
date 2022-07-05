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