import {createSlice} from "@reduxjs/toolkit"

const initialState= {
    mode:"light",
    user:"null",
    token:null,
    posts:[],
};
// *** dependency imports ***
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
// *** route imports ***

import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import postRoutes from "./routes/post.route.js"
// *** models imports***
import User from "./models/user.model.js"
import Post from "./models/post.model.js";
import {users, posts} from "./data/index.js"
// *** controller imports ***

import {register} from "./controllers/auth.controller.js"
import {createPost} from "./controllers/post.controller.js"
// ***middleware import ***
import { verifyToken } from "./middleware/auth.middleware.js";
// configureation of midllewares
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("command"));
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));
app.use("/assets",express.static(path.join(__dirname,'public/assets')));


// file storage

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/assets");
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});


const upload = multer({storage})


// routes with files
app.post("auth/register",upload.single("picture"),register)
app.post("/posts",verifyToken,upload.single("picture"),createPost);

// routes
app.use("/auth",authRoutes)
app.use("/users",userRoutes)
app.use("/posts",postRoutes)
// set up of mongoose
// http://localhost:3050/api/v1

const PORT = process.env.PORT || 8000;
console.log(PORT)
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(PORT)
        console.log(`Server is running at port:${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MongoDB connection failed ||", err);
})
export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setMode:(state )=>{
            state.mode = state.mode==="light"? "dark":"light";
        },
        setLogin:(state,action)=>{
            state.user = action.payload.user;
            state.token = action.payload.token;

        },
        setLogout:(state)=>{
            state.user= null;
            state.token = null;
        },
        setFriends:(state,action)=>{
            if(state.user){
                state.user.friends = 
                action.payload.firends;
            }
            else {
                 console.log("user friends does not exits")
            }
        },
        setPosts:(state,action)=>{
            state.posts = action.payload.posts;
        },
        setPost: (state , action)=>{
            const updatedPosts = state.posts.map((post)=>{
                if(post._id===action.payload.post._id) return action.payload.post;
                return post;
            })
        }
  }
  });
    export const {setMode,setLogin , setLogout, setFriends, setPosts, setPost}= authSlice.actions;
    export default authSlice.reducer
