const express = require("express");
require('dotenv').config();
const port = process.env.port;
const connectDb = require("./config/database"); 
const app = express();
const userrouter = require("./routes/userRoute");
const postrouter = require("./routes/postRoute");

const MONGO = process.env.MONGO_URI;
console.log(MONGO);

connectDb(MONGO);

app.get('/ping', (req,res)=>{
    res.send("Message: Pong")
})

app.use(express.json())

app.use("/",userrouter)
app.use("/",postrouter)

app.listen(port, () => {
  console.log(`🚀 Server running on PORT: ${port}`);  
});

module.exports = app;





// module.exports = app;
