const Module_schema=require("../models/Moduls")

exports.module_fetch=async (req,res)=>{
    try{
        const findmodule=await Module_schema.find({})

        res.json({
            success:true,
            data:findmodule,
            message:"successfully fetch data"
        })
    }
    catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}

exports.save_module=async (req,res)=>{
    try{
        const{modelheading,firstheading,firstcon,secondheading,secondcon,thirdheading,thirdcon,nextModulename}=req.body
        
        const temp_module=new Module_schema({modelheading,firstheading,firstcon,secondheading,secondcon,thirdheading,thirdcon,nextModulename})

        const savemodule=await temp_module.save()

        res.json({
            success:true,
            message:"successfully save module data",
            data:savemodule
        })
    }
    catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}