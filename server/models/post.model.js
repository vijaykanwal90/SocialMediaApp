import mongoose , {Schema} from "mongoose"

const  userSchema = new Schema({

    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    location:{
        type:String,

    },description:{
        type:String,

    },
    userPicturePath:{

    },
    picturePath:{

    },
    likes:{
        type:Object
    },
    comments:{
        type:Array
    }

},{timestamps:true})

export default User  = mongoose.model('User',userSchema)