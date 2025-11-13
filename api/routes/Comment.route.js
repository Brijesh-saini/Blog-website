import express from 'express'
import { addcomment, CommentCount, deleteComment, getAllComments, getComments } from '../controllers/Comment.controller.js'


const CommentRouote = express.Router()
 
CommentRouote.post('/add', addcomment)
CommentRouote.get('/get/:blogid', getComments)
CommentRouote.get('/get-count/:blogid', CommentCount)
CommentRouote.get('/get-all-comment', getAllComments)
CommentRouote.delete('/delete/:commentid', deleteComment)


export default CommentRouote