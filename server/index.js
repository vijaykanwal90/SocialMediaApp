import dotenv from "dotenv"
import {app} from "./app.js"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./database/index.js"
dotenv.config({
    path: './.env'
})
connectDB().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(` Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGODB  db connection failed !!!" , err);
})
