import express from 'express'
import authRoute from './routes/user.route.js'
import blogRoute from './routes/blog.route.js'
import { connection } from './config/connection.js'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.use('/api/auth/',authRoute)


app.use('/api/blogs/',blogRoute)


app.listen(4000,()=>{
    console.log('listening server')
    connection()
})

// http://localhost:4000/api/a