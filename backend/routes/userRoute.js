const express = require("express");
const router = express.Router();
const userModel = require("../config/models/userModel");
const Joi = require("joi");
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ username:user.Username, email:user.Email }, process.env.Jwtkey, { expiresIn: "1h" });
};

const userSchema = Joi.object({
    Username: Joi.string().required(),
    Password: Joi.string().required(),
    Email: Joi.string().email().required(),
});

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
        const { error, value } = userSchema.validate(req.body);

        if (error) {
            console.error('Validation error:', error.details);
            return res.status(400).json({ error: 'Validation error', details: error.details });
        }

        const data = await userModel.create(value);

        const token = generateToken(data);

        console.log("Token", token);

        res.status(201).json({ data, token });

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
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
