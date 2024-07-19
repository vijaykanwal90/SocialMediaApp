import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/user.model.js";
import { uploadOnCloudinary } from "../cloudinary.js";


// register user

export const register = async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        
        friends,
        location,
        occupation,
      } = req.body;
  
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      const pictureLocalPath=req.files?.picturePath[0]?.path;
      const profile = await uploadOnCloudinary(pictureLocalPath)
      const newUser = new User({
        firstName,
        lastName,
        email,
        password: passwordHash,
        picturePath:profile?.url || " ",
        friends,
        location,
        occupation,
        viewedProfile: Math.floor(Math.random() * 10000),
        impressions: Math.floor(Math.random() * 10000),
      });
      const savedUser = await newUser.save();
      if(savedUser){
        console.log("saved user is available")
      }
      else{
        console.log("saved user is not availbale")
      }
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


// login in 

export const login = async (req,res)=>{
    console.log("In the login controller")
    try {
        const {email , password} = req.body;
        const user = await User.findOne({email: email})

        if(!user){
            return res.status(400).json({msg:"User does not exist"})
        }
        console.log("logged in")
        const isMatch = await bcrypt.compare(password, user.password) 

        if(!isMatch){
            return res.status(400).json({msg:"credential does  not  match"})
        }

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
        delete user.password;
        console.log(user)
        res.status(200).json({token , user})
        
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}