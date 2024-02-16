require('dotenv').config();
const mongoose = require("mongoose");



const connectDb = async (MONGO) => {
    try {
        
        await mongoose.connect(MONGO);
        console.log("DB connected successfully");
       
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
};

module.exports = connectDb;
