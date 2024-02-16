const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    ID: Number, 
    Places: String,
    AvgWinterTemp: String ,
    Snowfall:  String,
    WinterHazard: String, 
    TravelAdvisories: String
});

const postmodel = mongoose.model("Post", postSchema);

module.exports = postmodel;



