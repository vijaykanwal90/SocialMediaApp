import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

const connectDB = async ()=>{
    try {
        console.log(process.env.PORT)
      console.log("on db connection")
      console.log(process.env.MONGO_URL)
      console.log(process.env.DB_NAME)
       const connectionInstance =  await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`);
       console.log(`\n MongoDB connected !!  DB HOST ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error ",error)
        process.exit(1);
    }
}

export default connectDB