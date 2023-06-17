import mongoose from "mongoose";
import bcrypt from "bcrypt"

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
    ],
    name:{        
        type: String
    
    }
});


userSchema.pre ('save',function(next)
{
    const user = this;
    const salt = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password,salt)
    user.password = encryptedPassword;
    next();
})

userSchema.methods.comparePassword  = function compare(password){
    const user = this;
    return bcrypt.compareSync(password,user.password)
}

const User =  mongoose.model('User',userSchema);

export default User;
