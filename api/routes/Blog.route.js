import express from 'express'
import { addBlog, deleteBlog, editBlog, getAllBlogs, getBlog, getBlogByCategory, getRelatedBlog, search, showAllBlog, updateBlog } from '../controllers/Blog.controller.js'
import upload from '../config/multer.js'
import { authenciate } from '../middleware/authenticate.js'

const BlogRoute = express.Router()

BlogRoute.post('/add', authenciate, upload.single('file'), addBlog)
BlogRoute.get('/edit/:blogid', authenciate, editBlog)
BlogRoute.put('/update/:blogid', authenciate, upload.single('file'), updateBlog)
BlogRoute.delete('/delete/:blogid', authenciate, deleteBlog)
BlogRoute.get('/get-all', authenciate, showAllBlog)

BlogRoute.get('/get-blog/:slug', getBlog)
BlogRoute.get('/get-related-blog/:category/:blog', getRelatedBlog)
BlogRoute.get('/get-blog-by-category/:category', getBlogByCategory)
BlogRoute.get('/search', search)

BlogRoute.get('/blogs', getAllBlogs)

export default BlogRoute