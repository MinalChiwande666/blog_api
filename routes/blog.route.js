import express from 'express'
import { BlogPost, getBlogs, userBlogs } from '../controllers/blog.controller.js'

const route = express.Router()

route.post('/postBlog',BlogPost)
route.get('/allblogs',getBlogs)
route.get('/userblog/:id',userBlogs)


export default route