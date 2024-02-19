const express = require("express");
const router = express.Router();
const postModel = require("../models/Postmodel");

router.get("/posts",async(req,res)=>{
    try{
        const data = await postModel.find();
    res.json(data);
    }catch(error){
        console.log(error);
        
    }
  })

  router.post("/posts",async(req,res)=>{
    try{
        const data = await postModel.create(req.body);
    res.json(data);
    }catch(error){
        console.log(error);
        
    }
  })

  router.put("/posts/:id", async (req, res) => {
    try {
        const postId = req.params.id;
        const updatedposts = await postModel.findByIdAndUpdate(postId, req.body, { new: true });
        res.json(updatedposts);
    } catch (error) {
        console.log(error);
    }
});

router.delete("/posts/:id", async (req, res) => {
    try {
        const postId = req.params.id;
        const deletedpost = await postModel.findByIdAndDelete(postId);
        res.json(deletedpost);
    } catch (error) {
        console.error(error);
        
    }
});


router.patch("/posts/:id", async (req, res) => {
    try {
        const postId = req.params.id;
        const updatedpost = await postModel.findByIdAndUpdate(postId, req.body, { new: true });
        res.json(updatedpost);
    } catch (error) {

        console.error(error);
    }
});

module.exports = router;