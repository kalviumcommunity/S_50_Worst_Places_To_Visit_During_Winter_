const express = require("express");
const router = express.Router();
const postModel = require("../models/Postmodel");

router.get("/posts", async (req, res) => {
    try {
        const data = await postModel.find();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error with the getting process of the posts details" });
    }
});

router.post("/posts", async (req, res) => {
    try {
        const data = await postModel.create(req.body);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.put("/posts/:id", async (req, res) => {
    try {
        const postId = req.params.id;
        const updatedPost = await postModel.findByIdAndUpdate(postId, req.body, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.json(updatedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.delete("/posts/:id", async (req, res) => {
    try {
        const postId = req.params.id;
        const deletedPost = await postModel.findByIdAndDelete(postId);
        if (!deletedPost) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.json(deletedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.patch("/posts/:id", async (req, res) => {
    try {
        const postId = req.params.id;
        const updatedPost = await postModel.findByIdAndUpdate(postId, req.body, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.json(updatedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
