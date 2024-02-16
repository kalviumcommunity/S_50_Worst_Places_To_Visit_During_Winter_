const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");

router.get("/users",async(req,res)=>{
    try{
        const data = await userModel.find();
    res.json(data);
    }catch(error){
        console.log(error);
        
    }
  })

  router.post("/users",async(req,res)=>{
    try{
        const data = await userModel.create(req.body);
    res.json(data);
    }catch(error){
        console.log(error);
        
    }
  })

  router.put("/users/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await userModel.findByIdAndUpdate(userId, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        console.log(error);
    }
});

router.delete("/users/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await userModel.findByIdAndDelete(userId);
        res.json(deletedUser);
    } catch (error) {
        console.error(error);
    }
});

router.patch("/users/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await userModel.findByIdAndUpdate(userId, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
    }
});




module.exports = router;