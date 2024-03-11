const express = require("express");
const router = express.Router();
const Joi = require("joi");
const postModel = require("../config/models/Postmodel");

const postSchema = Joi.object({
    UserId: Joi.string().required(),
    Places: Joi.string().required(),
    AvgWinterTemp: Joi.number().required(),
    Snowfall: Joi.string().required(),
    WinterHazard: Joi.string().required(),
    TravelAdvisories: Joi.string().required(),
});

const handleError = (res, error, status = 500, message = "Internal Server Error") => {
    console.error(error);
    res.status(status).json({ error: message });
};

router.get("/posts", async (req, res) => {
    try {
        const data = await postModel.find();
        res.json(data);
    } catch (error) {
        handleError(res, error, 500, "Internal Server Error with the getting process of the posts details");
    }
});

router.post("/posts", async (req, res) => {
    try {
        const { error } = postSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: "Invalid information", details: error.details });
        }

        const data = await postModel.create(req.body);
        res.json(data);
    } catch (error) {
        handleError(res, error, 500, "Internal Server Error");
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
        handleError(res, error);
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
        handleError(res, error);
    }
});

router.patch("/posts/:id", async (req, res) => {
    try {
       

        const updatedPost = await postModel.findByIdAndUpdate(postId, req.body, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.json(updatedPost);
    } catch (error) {
        handleError(res, error);
    }
});

module.exports = router;
