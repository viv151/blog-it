import Blog from "../models/blog.models.js";
import Comment from "../models/comment.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.utils.js";


const addBlog = async (req, res) => {
    try {
        const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog);
        const imageFile = req.file?.path;
        console.log(imageFile)

        //check if all fields are presnet
        if (!title || !description || !category || !imageFile) {
            return res.json({ success: false, message: "Missing required fields" })
        }

        //upload on cloudinary 
        const uploadedImage = await uploadOnCloudinary(imageFile);
        // console.log(uploadedImage)

        //save data on db

        await Blog.create({ title, subTitle, description, category, image: uploadedImage?.url, isPublished })

        //send response

        res.json({ success: true, message: "Blog added successfully" })


    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

const getAllBlogs = async (req, res) => {

    try {
        const blogs = await Blog.find({ isPublished: true })
        res.json({ success: true, blogs })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

const getBlogById = async (req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId)
        if (!blog) {
            return res.json({ success: false, message: "Blog not found" })
        }
        res.json({ success: true, blog })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

const deleteBlogById = async (req, res) => {
    try {
        const { id } = req.body;
        await Blog.findByIdAndDelete(id);

        //also delete all comments associated with the blog

        await Comment.deleteMany({Blog: id})
        res.json({ success: true, message: 'Blog deleted successfully' })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}


const togglePublish = async (req, res) => {
    try {
        const { id } = req.body;
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({ success: true, message: 'Blog status updated' })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

const addComment = async (req, res) => {
    try {
        const { blog, name, content } = req.body;
        await Comment.create({ blog, name, content })
        res.json({ success: true, message: 'Comment added for review' })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

const getBlogComments = async (req, res) => {
    try {
        const {blogId} = req.body;
        const comments = await Comment.find({blog: blogId, isApproved: true})
        .sort({createdAt: -1})
        res.json({ success: true, comments})
    } catch (error) {
        res.json({ success: false, message: error.message })

    }
}

export { addBlog, getAllBlogs, getBlogById, deleteBlogById, togglePublish, addComment, getBlogComments }