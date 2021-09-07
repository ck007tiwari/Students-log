const mongoose = require('mongoose');
const Student = require('./models/students');

mongoose.connect('mongodb://localhost:27017/studentLog', { useNewUrlParser: true })
   .then(() => {
      console.log('Connection ON with MONGO');   
   })
   .catch(err => { 
      console.log('Mongo Connection error');    
      console.log(err);   
   })

   //To insert one by one 
   // const s= new Student({
   //    name: 'Tiwari',
   //    cardNo:4661,
   //    purpose: 'Syllabus',
   //    for : 'Development',
   //    join:2019,
   //    achived: 'NO',
   // })
   // s.save()
   // .then(p=>{
   //    console.log(p);
   // })
   // .catch(e=>{
   //    console.log(e);
   // })

   //To insert many at once 
   const studentDetails = [
      {
         name: 'Cobra',
         cardNo:1142,
         purpose: 'Competition',
         for : 'UPSI',
         join:2018,
         achived: 'Working ON',
      },
      {
         name: 'Amit',
         cardNo:1145,
         purpose: 'Competition',
         for : 'SSC CGL',
         join:2018,
         achived: 'Working ON',
      },
      {
         name: 'Rakesh Yadav',
         cardNo:0556,
         purpose: 'Competition',
         for : 'SSC',
         join:2018,
         achived: 'Working ON',
      },
   ];

   Student.insertMany(studentDetails)
   .then(res =>{
      console.log(res);
   })
   .catch(e=>{
      console.log(e);
   })