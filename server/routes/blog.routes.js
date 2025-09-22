import {Router} from "express"
import { upload } from "../middlewares/multer.middleware.js";
import {addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogById, getBlogComments, togglePublish} from "../controllers/blog.controllers.js"
import auth from "../middlewares/auth.middleware.js";


const blogRouter = Router();


blogRouter.route("/add").post(upload.single('image'),auth, addBlog)
blogRouter.route("/all").get(getAllBlogs)
blogRouter.route("/:blogId").get(getBlogById)
blogRouter.route("/delete").post(auth, deleteBlogById)
blogRouter.route("/toggle-publish").post(auth, togglePublish)

//comments

blogRouter.post('/add-comment', addComment);
blogRouter.post("/comments", getBlogComments)

//gemini api
blogRouter.route("/generate").post(auth, generateContent)



export default blogRouter;
