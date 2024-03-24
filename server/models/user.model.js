import mongoose , {Schema} from 'mongoose';
// import { Jwt } from 'jsonwebtoken';
// import bcrypt from 'bcrypt';


const userSchema = new Schema ({

    firstname:{
        type: String,
        required:true,
        lowercase : true,
        trim : true,
        min:2,
        max:50,
        index: true
    },
    lastname:{
        type:String,
        required:true,
        lowercase:true,
        min:2,
        max:50,
        trim:true

    },
    friends:{
        type:Array,
        default:[],

    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        max:50,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        min:2,
    },
    picturePath:{
        type:String,
        default:"",
    },
    location:{
        type:String,
        required:true,
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

 const User = mongoose.model('User',userSchema);
 export default User;