const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");

router.get("/",async(req,res)=>{
    try{
        const data = await userModel.find();
    res.json(data);
    }catch(error){
        console.log(error)
    }
  })

module.exports = router;