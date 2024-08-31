const express=require("express")
const { models } = require("mongoose")
const { save_video, fetch_video } = require("../controllers/video")
const { module_fetch, save_module } = require("../controllers/Module")

const router=express.Router()

router.post("/save_video",save_video)
router.post("/fetch_video",fetch_video)
router.post("/savemodule",save_module)
router.get("/fetchmodules",module_fetch)


module.exports=router