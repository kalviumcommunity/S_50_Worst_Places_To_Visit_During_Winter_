const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    ID: Number,
    Username: String,
    Email: String,
    Password: String,
    DateOfRegistration: Date
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
