import { handleError } from "../helpers/handleError.js"
import Comment from "../models/comment.model.js"

export const addcomment = async(req, res, next) => {
    try{
        const {author, blogid, comment} = req.body
        const newComment = new Comment({
            user: author,
            blogid : blogid,
            comment: comment
        })

        await newComment.save()
        // Populate user data before sending response
        await newComment.populate('user', 'name avatar')
        
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
        const comments = await Comment.find({blogid}).populate('user', 'name avatar').sort({createdAt: -1}).lean().exec()

        res.status(200).json({
            success: true,
            comments  
        })
    }catch(error){
        next(handleError(500, error.message))
    }
}

// comments.jsx controller
export const CommentCount = async(req, res, next) => {
    try{
        const {blogid} = req.params
        const commentCount = await Comment.countDocuments({blogid})

        res.status(200).json({
            success: true,
            commentCount
        })
    }catch(error){
        next(handleError(500, error.message))
    }
}

export const getAllComments = async(req, res, next) => {
    try{
        const user = req.user
        let comments
        if(user.role === 'admin'){
            comments = await Comment.find().populate('blogid','title').populate('user', 'name')
        } else{
            comments = await Comment.find({user: user._id}).populate('blogid','title').populate('user', 'name')
        }
        

        res.status(200).json({
            // success: true,
            comments
        })
    }catch(error){
        next(handleError(500, error.message))
    }
}

export const deleteComment = async(req, res, next) => {
    try{
        const {commentid} = req.params
         await Comment.findByIdAndDelete(commentid)

        res.status(200).json({
            success: true,
            message: 'Comment deleted.'
        })
    }catch(error){
        next(handleError(500, error.message))
    }
}

