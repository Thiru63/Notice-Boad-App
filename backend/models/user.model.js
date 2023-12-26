const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    
    
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    phone_number:{
        type:Number,
        required:true,
        unique:true
    },
    department:{
        type:String,
        required:true,
    }
})

const user=mongoose.model('user',userSchema)

module.exports=user