import mongoose from "mongoose";
// import {DB_NAME} from "../constants.js";


const connectDB = async ()=>{
    try {
        // console.log(process.env.MONGODB_URL)
       const connectionIstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`);
       console.log(`\n MongoDB connected !!  DB HOST ${connectionIstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error ",error)
        process.exit(1);
    }
}

export default connectDB