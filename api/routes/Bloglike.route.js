import express from 'express'
import { doLike, likeCount } from '../controllers/BlogLike.controller.js'
import { authenciate } from '../middleware/authenticate.js'


const BlogLikeRoute = express.Router()

BlogLikeRoute.post('/do-like', authenciate, doLike)
BlogLikeRoute.get('/get-like/:blogid/:userid', likeCount)

export default BlogLikeRoute