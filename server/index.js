import connectDB from "./database/index.js"
import dotenv from "dotenv"
import mongoose from "mongoose";
import {app}  from "./app.js"
dotenv.config({
    path: './.env'
})

connectDB()
console.log(process.env.MONGO_URL)
const PORT = process.env.PORT || 5434;

mongoose.connect(process.env.MONGODB_URL,{
 
}).then(()=>{
    app.listen(PORT ,()=>{
        console.log(PORT)
        console.log(`Server is running at port:${PORT}`);
    })
})
.catch((error)=>{
    console.log("MongoDB connection failed ||", error);
})