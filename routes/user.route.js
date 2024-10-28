import express from 'express'
import { Login, RegisterUser } from '../controllers/user.controllers.js'

const route = express.Router()

route.post('/register',RegisterUser)
route.post('/login',Login)

export default route