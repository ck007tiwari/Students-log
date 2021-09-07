const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { text} = require('express');

const path = require('path');
app.set('views', path.join(__dirname,'views'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({   extended: true   }));
app.use(express.json());
const Student = require('./models/students');

mongoose.connect('mongodb://localhost:27017/studentLog', {      useNewUrlParser: true,   })
   .then(() => {
      console.log('Connection ON with MONGO');   
   })
   .catch(err => { 
      console.log('Mongo Connection error');    
      console.log(err);   
   })

   app.get('/',(req,res)=>{
      res.send('Welcome to the Home Page')
   })
   app.get('/list',(req,res)=>{
      console.log()
      res.render('/views/:list')
   })

   app.listen(3000, ()=>{
      console.log("Connection Open at 3000 Port");
   })