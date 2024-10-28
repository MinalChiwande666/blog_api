import mongoose from "mongoose";

export const connection = async()=>{
    try{
       await mongoose.connect('mongodb://localhost:27017/Blog_app')
       console.log('connected')
    }catch(e)
    {
        throw new Error(e)
    }
}