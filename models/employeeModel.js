const mongoose=require('mongoose')

const  employeeschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }

})

const employees=mongoose.model('employees',employeeschema)
module.exports=employees