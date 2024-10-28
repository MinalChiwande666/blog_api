import bcrypt from 'bcryptjs'
import usermodel from '../models/user.model.js'

export const RegisterUser = async(req,res)=>{
   const {email,username,password} = req.body

   try{
        if(!email && !username && !password) return res.json({message:'Require All Fields'}).status(300)

        if(!email) return res.json({message:'Email Required'}).status(300)

        if(!username) return res.json({message:'Username Required'}).status(300)

        if(!password) return res.json({message:'Password Required'}).status(300)

        const hashed = await bcrypt.hashSync(password,10)

        if(!hashed) return res.json({message:"Something went wrong"}).status(300)

        
        const user = new usermodel({
            email:email,
            username:username,
            password:hashed
        })

        await user.save()
        res.send('User saved')
   }catch(e)
   {
      throw new Error(e)
   }
}

export const Login = async(req,res)=>{
    const {email,password} = req.body

    try{
        const findUser = await usermodel.find({email:email})

       if(!findUser) return res.json({message:"Invalid User"}).status(300)

       const comparepassword = await bcrypt.compareSync(password,findUser[0]?.password)

       if(!comparepassword) return res.json({message:"Invalid User"}).status(300)

       return res.json({message:'Login successfully'}).status(200)
    }catch(e)
    {
        throw new Error(e)
    }
}