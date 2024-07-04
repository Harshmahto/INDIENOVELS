import mongoose from "mongoose";

const commnetSchema = new mongoose.Schema(
    {
        review_id: {
            type: Schema.Types.ObjectId
        },
        user_id: {
            type: Schema.Types.ObjectId
        },
        comment_text: {
            type: String
        },
        comment_date: {
            type: String
        },
        book_id: {
            type: Schema.Types.ObjectId
        }
    },{timestamps:true}
)

export const Comment = mongoose.model("Comment",commnetSchema)