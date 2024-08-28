const express=require("express")
const { models } = require("mongoose")
const { save_video, fetch_video } = require("../controllers/video")

const router=express.Router()

router.post("/save_video",save_video)
router.post("/fetch_video",fetch_video)

module.exports=router