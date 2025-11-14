import express from 'express'
import { addcomment, CommentCount, deleteComment, getAllComments, getComments } from '../controllers/Comment.controller.js'
import { authenciate } from '../middleware/authenticate.js'


const CommentRouote = express.Router()
 
CommentRouote.post('/add', authenciate, addcomment)
CommentRouote.get('/get/:blogid', getComments)
CommentRouote.get('/get-count/:blogid', CommentCount)
CommentRouote.get('/get-all-comment', authenciate, getAllComments)
CommentRouote.delete('/delete/:commentid', authenciate, deleteComment)


export default CommentRouote