import mongoose from "mongoose";


export const connect = async () => {

    await mongoose.connect("mongodb+srv://jd:jd123@cluster0.wjqjzgn.mongodb.net/")
}

