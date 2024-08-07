// // *** dependency imports ***
// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// // import dotenv from "dotenv"
// import multer from "multer";
// import helmet from "helmet";
// import morgan from "morgan";
// import dotenv from "dotenv"
// // import mongoose from "mongoose";
// // import {app}  from "./app.js"

// import path from "path";
// import { fileURLToPath } from "url";
// // *** route imports ***

// import authRoutes from "./routes/auth.route.js"
// import userRoutes from "./routes/user.route.js"
// import postRoutes from "./routes/post.route.js"
// // *** models imports***
// import User from "./models/user.model.js"
// import Post from "./models/post.model.js";
// import {users, posts} from "./data/index.js"
// // *** controller imports ***

// import {register} from "./controllers/auth.controller.js"
// import {createPost} from "./controllers/post.controller.js"
// // ***middleware import ***
// import { verifyToken } from "./middleware/auth.middleware.js";
// import connectDB from "./database/index.js";
// // configureation of midllewares

// dotenv.config({
//     path: './.env'
// })
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// const app = express();
// app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
// app.use(morgan("command"));
// app.use(bodyParser.json({limit:"30mb",extended:true}));
// app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
// app.use(cors({
//     origin : process.env.CORS_ORIGIN,
//     credentials : true
// }));

// app.use("/assets",express.static(path.join(__dirname,'public/assets')));


// // file storage

// const storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,"public/assets");
//     },
//     filename:function(req,file,cb){
//         cb(null,file.originalname);
//     }
// });


// const upload = multer({storage})


// // routes with files
// app.post("/auth/register",upload.single("picture"),register)
// app.post("/posts",verifyToken,upload.single("picture"),createPost);

// // routes
// app.use("/auth",authRoutes)
// app.use("/users",userRoutes)
// app.use("/posts",postRoutes)
// export {app}