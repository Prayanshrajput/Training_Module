const express=require("express")
const cors=require("cors")

const app=express();
app.use(express.json())
app.use(cors())
require("dotenv").config()

const dbconnect=require("./config/database")
 dbconnect()
 const router=require("./routes/allroute")
 app.use(router)


const PORT = process.env.PORT || 4000
app.listen(PORT,()=>(console.log(`server started at port -> ${PORT}`)))