const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Username: String,
    Email: String,
    Password: String,
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
