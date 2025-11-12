import { handleError } from "../helpers/handleError.js"
import Comment from "../models/comment.model.js"

export const addcomment = async(req, res, next) => {
    try{
        const {author, blogid, comment} = req.body
        const newComment = new Comment({
            author: author,
            blogid : blogid,
            comment: comment
        })

        await newComment.save()
        // Populate author data before sending response
        await newComment.populate('author', 'name avatar')
        
        res.status(200).json({
            success: true,
            message: 'Comment submited.',
            comment: newComment  
        })
    }catch(error){
        next(handleError(500, error.message))
    }
}

// CommentList.jsx controller
export const getComments = async(req, res, next) => {
    try{
        const {blogid} = req.params
        const comments = await Comment.find({blogid}).populate('author', 'name avatar').sort({createdAt: -1}).lean().exec()

        res.status(200).json({
            success: true,
            comments  
        })
    }catch(error){
        next(handleError(500, error.message))
    }
}