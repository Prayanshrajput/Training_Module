const videomodel=require("../models/video")

exports.fetch_video=async(req,res)=>{
    try{
        const{video_id}=req.body
        const videofind=await videomodel.findOne({"video_id":video_id})
        
        if(videofind){
            res.json({
                success:true,
                data:videofind
            })
        }
        else{
            res.json({
                success:false,
                message:"video is not available"
            })
        }

    }
    catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}

exports.save_video=async(req,res)=>{
    try{
        const{data,last_time}=req.body
       
        const newVideo= new videomodel({data,last_time,"video_id":Date.now()})
        const save_video=await newVideo.save()

       return res.json({
            success:true,
            message:"video save successfully"
        })
    }
    catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}