import express from "express"
import "dotenv/config"
import cors from "cors"
//dont forget to write js
import connectDB from "./configs/db.js";
import adminRouter from "./routes/admin.routes.js";
import blogRouter from "./routes/blog.routes.js";

const app = express();

await connectDB()

//middlewares
app.use(cors());
app.use(express.json());


//routes
app.get('/', (req, res) => res.send("API is working"));
app.use("/api/admin", adminRouter)
app.use("/api/blog", blogRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server is running on port: " + PORT))


export default app;