const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { text} = require('express');

//install method override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

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

   app.get('/students', async (req,res)=>{
      const students = await Student.find({});
      console.log(students);
      res.render('details/details', {students});// here we are sending students  value to " details/details " this location where we can access them.
   });

   app.get('/students/new',(req,res)=>{
      res.render('details/newstudent')
   })

   

// test id= 61370969105deb1f9d15b656
   app.get('/students/:id', async (req, res)=>{
      const { id } = req.params
      const student = await Student.findById(id);//Find by id
      console.log(student);
      res.render('details/onestudent', {student});
      // res.send('Viewing the detail of one student')
   })

   app.get('/students/:id/edit', async (req, res)=>{
      const { id } = req.params
      const student = await Student.findById(id);//Find by id
      console.log(student);
      res.render('details/edit', {student});  

   })
//*********************POST DATA*********************** */
   app.post('/students', async (req,res)=>{
      const newStudent = new Student(req.body)
      await newStudent.save();
      console.log(newStudent); 
      // res.send('adding data')
      res.redirect(`students/${newStudent._id}`);
   })

 app.put('/students/:id',async(req, res)=>{
   const {id} = req.params;
   const student = await Student.findByIdAndUpdate(id, req.body, {runValidators:true, new:true});//Find by id
   res.redirect(`/students/${student._id}`)
 })

   app.listen(3000, ()=>{
      console.log("Connection Open at 3000 Port");
   }) 