import mongoose from "mongoose";


const connectDB = async () => {
    try {
        //this event logs the text when db is connected
        mongoose.connection.on("connected", () => console.log("Database Connected"))
        await mongoose.connect(`${process.env.MONGODB_URI}/blog-it`)
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDB;