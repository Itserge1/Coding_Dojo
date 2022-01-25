const  faker  = require('@faker-js/faker');
const  User  = require('./components/User');
const  Company  = require('./components/Company');

// import express
const express = require("express");
const app = express();
const port = 8000;

// This is allowing our route to accept in some json information
// Short ,this make the post request work well
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// import Product from './components/Product'



app.get("/api/users/new", (req, res) =>{
    res.json({User: new User()});
})

app.get("/api/companies/new", (req, res) =>{
    res.json({Company: new Company()});
})

app.get("/api/user/companies", (req, res) =>{
    res.json({User: new User(), Company: new Company()});
})

// app.post("/api/repeat", (req, res) =>{
//     console.log(req.body);
//     res.json({message:"recieved!"});
// })



app.listen(port, ()=> console.log(`currently running on port ${port}`));