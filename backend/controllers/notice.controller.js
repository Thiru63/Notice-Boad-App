
const Notice=require('../models/notice.model.js')

// notice create

const createNotice=async (req,res)=>{

    
    let {title,body,category}=req.body
     
    
        
        if(!title||!body||!category){
            return res.status(400).send({
                message:"Please Fill All Fields"
            })
        }

    let notice=await Notice.create({
        userId:req.user._id,
        title,
        body,
        category,
    })

    return res.status(201).send({
        message:'Notice is created successfully'
    })

}

// retrieve notices
const getAllNotices=async (req,res)=>{

    let {category}=req.query
    
   if(category){
    let notices=await Notice.find({userId:req.user._id,category:category})
    if(notices.length>0){
        return res.status(200).json(notices)
    }else{
        return res.status(400).send({
            message:'No notices'
        })
    }
   }else{
    let notices=await Notice.find({userId:req.user._id})
    if(notices.length>0){
        return res.status(200).json(notices)
    }else{
        return res.status(400).send({
            message:'No notices'
        })
    }

   }

    

    



    

}

// update notices
const updateNotices=async (req,res)=>{

    let {noticeId}=req.params
    let {title,body,category}=req.body
    if(!noticeId){
        return res.status(400).send({
            message:'Invalid request'
        })
    }

    let notice=await Notice.findOne({userId:req.user._id,_id:noticeId})
    if(!notice){
        return res.status(404).send({
            message:'No Notice'
        })
    }

    await Notice.findOneAndUpdate({userId:req.user._id,_id:noticeId},{
        title,
        body,
        category
    })

    return res.status(200).send({
        message:'Notice is updated successfully'
    })


}

// delete notices
const deleteNotices=async (req,res)=>{

    let {noticeId}=req.params
    
    if(!noticeId){
        return res.status(400).send({
            message:'Invalid request'
        })
    }

    let notice=await Notice.findOne({userId:req.user._id,_id:noticeId})
    if(!notice){
        return res.status(404).send({
            message:'No Notice'
        })
    }

    await Notice.deleteOne({userId:req.user._id,_id:noticeId})

    return res.status(200).send({
        message:'Notice is deleted successfully'
    })


}

module.exports={
    createNotice,
    getAllNotices,
    updateNotices,
    deleteNotices
}