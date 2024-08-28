const mongoose=require("mongoose")


const video=new mongoose.Schema({
  data:{
    type:String,
    require:true
  },
  last_time:{
    type:String,
    require:true
  },
  video_id:{
    type:String,
    require:true
  },
})



module.exports=mongoose.model("video",video)