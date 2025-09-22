import { mongoose, Schema } from "mongoose";


const blogsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    isPublished: {
        type: Boolean,
        required: true
    }
}, { timestamps: true })


const Blog = mongoose.model('Blog', blogsSchema)

export default Blog