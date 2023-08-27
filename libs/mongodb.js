import mongoose from "mongoose";

const connectMongoDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGOFB_URI)
        console.log("Connected to MongoDB!")
    }
    catch(err)
    {
        console.log("MongoDB connection error is : "+err)
    }
}

export default connectMongoDB;