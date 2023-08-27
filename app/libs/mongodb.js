import mongoose from "mongoose";

const connectMongoDB = ()=>{
    try{
        mongoose.connect(process.env.MONGOFB_URI)
        console.log("Connected to MongoDB!")
    }
    catch(err)
    {
        console.log("MongoDB connection error is : "+err)
    }
}

export default connectMongoDB;