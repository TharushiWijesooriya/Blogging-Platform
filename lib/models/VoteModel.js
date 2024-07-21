import mongoose, { Schema, Schema, Schema } from "mongoose";

const Schema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    blogPostId: {
        type:Schema.Types.ObjectId,
        ref:'blog',
        required:true
    },
    vote: {
        type: Number,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const VoteModel = mongoose.models.vote || mongoose.model('vote',Schema);
export default VoteModel;