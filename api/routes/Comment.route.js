import express from 'express'
import { addcomment, getComments } from '../controllers/Comment.controller.js'


const CommentRouote = express.Router()

CommentRouote.post('/add', addcomment)
CommentRouote.get('/get/:blogid', getComments)


export default CommentRouote