import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String
    },
    bio: {
        type: String
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ]
});


const User =  mongoose.model('User',tweetSchema);

export default User;
