const mongoose=require("mongoose")

const Module=new mongoose.Schema({
  modelheading:{
    type:String
  },
  firstheading:{
    type:String
  },
  firstcon:{
        type:String
      },
      secondheading:{
        type:String
      },
      secondcon:{
        type:String
      },
      thirdheading:{
        type:String
      },
      thirdcon:{
        type:String
      },
      nextModulename:{
        type:String
      } 
})

module.exports=mongoose.model("Module",Module)