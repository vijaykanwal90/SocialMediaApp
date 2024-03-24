import mongoose , {Schema} from 'mongoose';
import { Jwt } from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const userSchema = new Schema ({

    firstname:{
        type: String,
        require:true,
        lowercase : true,
        trim : true,
        min:2,
        max:8,
        index: true
    },
    lastname:{
        type:String,
        require:true,
        lowercase:true,
        min:2,
        max:8,
        trim:true

    },
    friends:{
        type:Array

    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        require:true,
        trim:true,
        min:2,
    },
    picturePath:{

    },
    location:{
        type:String,
        require:true,
        lowercase:true,
        trim:true
    },
    occupation:{
        type:String,
        lowercase:true,
        trim:true
    },
    viewedProfile:{
        type:Number,

    },
    impressions:{
        type:Number
    }

    

},{timestamps:true})

export const User = mongoose.model('User',userSchema);