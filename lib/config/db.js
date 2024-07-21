import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://tck14:tck20244026@cluster0.vrol8mk.mongodb.net/my-blog-app')
    console.log("DB Connected");
}