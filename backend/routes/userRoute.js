const express = require("express");
const router = express.Router();
const userModel = require("../config/models/userModel");

router.get("/users", async (req, res) => {
    try {
        const data = await userModel.find();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/users", async (req, res) => {
    try {
        const data = await userModel.create(req.body);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.put("/users/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await userModel.findByIdAndUpdate(userId, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.delete("/users/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await userModel.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(deletedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.patch("/users/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await userModel.findByIdAndUpdate(userId, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
