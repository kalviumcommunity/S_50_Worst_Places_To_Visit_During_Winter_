const express = require("express");
require('dotenv').config();
const port = 3000;
const connectDb = require("./config/database"); 
const app = express();
const router = require("./routes/userRoute");

const MONGO = process.env.MONGO_URI;
console.log(MONGO);

connectDb(MONGO);

app.get('/ping', (req,res)=>{
    res.send("Message: Pong")
})

app.use(express.json())

app.use("/users",router)

app.listen(port, () => {
  console.log(`🚀 Server running on PORT: ${port}`);  
});

module.exports = app;