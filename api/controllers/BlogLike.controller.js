import { handleError } from "../helpers/handleError.js"
import BlogLike from "../models/bloglike.model.js"

export const doLike = async(req, res, next) => {
    try{
        // use `userid` to match schema field name
        const { userid, blogid } = req.body
        
        // Validate required fields
        if (!userid || !blogid) {
            return next(handleError(400, "userid and blogid are required"))
        }
        
        let like = await BlogLike.findOne({ userid, blogid })
        if (!like) {
            const saveLike = new BlogLike({ userid, blogid })
            like = await saveLike.save()
        } else {
            await BlogLike.findByIdAndDelete(like._id)
        }

        const likecount = await BlogLike.countDocuments({ blogid })

        res.status(200).json({
            success: true,
            likecount
        })
    }catch (error) {
        next(handleError(500, error.message))
    }
}

export const likeCount = async(req, res, next) => {
    try{
        const {blogid, userid} = req.params
        const likecount = await BlogLike.countDocuments({blogid})

        let isUserliked = false
        if(userid){
            const getuserlike = await BlogLike.countDocuments({blogid, userid})
            if(getuserlike > 0){
                isUserliked = true
            }
        }

        res.status(200).json({
            success: true,
            likecount,
            isUserliked
        })
    }catch (error) {
        next(handleError(500, error.message))
    }
}