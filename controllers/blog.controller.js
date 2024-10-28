import blogmodel from "../models/blog.model.js"
import usermodel from "../models/user.model.js"

export const BlogPost =async(req,res)=>{
    const {uid,title,desc,img} = req.body

    try{
        
        const newBlog = new blogmodel({
            uid,
            title,
            desc,
            img
        })

        await newBlog.save()

        res.send('Blog Added').status(200)

    }catch(e)
    {
        throw new Error(e)
    }
}

export const getBlogs = async(req,res)=>{
    try{

        const allblogs = await blogmodel.find()

        res.json({data:allblogs}).status(200)

    }catch(e)
    {
        throw new Error(e)
    }
}


export const userBlogs = async(req,res)=>{
    const {id} = req.params
    
    const user_blog = await blogmodel.find({uid:id}).populate('uid')

    res.json({user_blog}).status(200)
}