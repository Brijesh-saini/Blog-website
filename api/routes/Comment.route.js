import express from 'express'
import { addcomment, CommentCount, getComments } from '../controllers/Comment.controller.js'


const CommentRouote = express.Router()

CommentRouote.post('/add', addcomment)
CommentRouote.get('/get/:blogid', getComments)
CommentRouote.get('/get-count/:blogid', CommentCount)


export default CommentRouote