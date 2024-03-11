const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    UserId: String,
    Places: String,
    AvgWinterTemp: String ,
    Snowfall:  String,
    WinterHazard: String, 
    TravelAdvisories: String,
});

const postmodel = mongoose.model("Post", postSchema);

module.exports = postmodel;



