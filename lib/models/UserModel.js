import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    fullName: { 
        type: String, 
        required: true 
    },
    username: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date, 
        default: Date.now 
    }
})

const UserModel = mongoose.models.user || mongoose.model('user',Schema);
export default UserModel;