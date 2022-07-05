const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

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

//create model using contactSchema
const contact = mongoose.model("contact", contactSchema)

app.post("/", (req, res) => {
    let newContact = new contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    newContact.save();
    res.redirect('/');
})

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));


// for ejs files 
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render('contact')
})

//importing users routers and set it to starts with 'users'
// const userRouter = require('./routes/users')
// app.use('/users', userRouter)

//create a server 
app.listen(3000)