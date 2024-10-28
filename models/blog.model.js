import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    uid:{
       type:mongoose.Schema.ObjectId,
       ref:'User'
    },
    title:{
        type:String,
    },
    desc:{
        type:String
    },
    img:{
        type:String
    }
},{timestamps:true})

const blogmodel = mongoose.model('Blog',blogSchema)

export default blogmodel
