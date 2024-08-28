const mongoose=require("mongoose")

require("dotenv").config()

const dburl=process.env.DATABASE_URL

const dbconnect=()=>{
    mongoose.connect(dburl,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("database connected succussfully")})
    .catch((error)=>{console.log("error in db")
        process.exit(1);
    })
    
}

module.exports=dbconnect