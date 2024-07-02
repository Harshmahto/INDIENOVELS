import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required : true
        },
        email: {
            type: String,
            required : true

        },
        passwrod: {
            type: String,
            required : true
        },
        profile_image: {
            type: String
        },
        bio: {
            type: String
        },
        join_date: {
            type: String,
            required : true
        },
        cover_image: {
            type: String
        },
        gender: {
            type: String
        },
        history: [{
            type: Schema.Types.ObjectId
        }]
    },{timestamps:true}
)

export const User = mongoose.model("User",userSchema)