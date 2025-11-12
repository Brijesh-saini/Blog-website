import mongoose from "mongoose";

//Blog model that connect with blog deatils and blog
const commentSchema = new mongoose.Schema({
    author:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    blogid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Blog'
    },
    comment: {
        type: String,
        required: true,
        trim: true
    },
   

},{timestamps: true})

const Comment = mongoose.model('Comment', commentSchema, 'comments')
export default Comment