const mongoose=require('mongoose')

const Schema=mongoose.Schema

const noticeSchema=mongoose.Schema({
    
    userId:{
      type:Schema.Types.ObjectId,
      required:true,
      
    },
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now(),
        required:true,
    }
})

const notice=mongoose.model('notice',noticeSchema)

module.exports=notice