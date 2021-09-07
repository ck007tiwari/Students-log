const mongoose = require('mongoose');

 const studentSchema = new mongoose.Schema({ 
    name:{
       type:String,
       required: true,
       min:5,
    },
    cardNo:{
       type: Number,
       required:true,
       min:3
    },
    purpose:{
       type:String
    },
    for:{
       type:String
    },
    join:{
       type:String
    },
    achived:{
       type:String
    }
 })

 const Student = mongoose.model('Student', studentSchema);
 module.exports = Student;