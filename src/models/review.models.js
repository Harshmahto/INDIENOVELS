import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
    {
        book_id: {
        type: Schema.Types.ObjectId
        },
        user_id: {
        type: Schema.Types.ObjectId
        },
        rating: {
        type: Number
        },
        review_date: {
        type: String
        }
    },{}
)

export const Review = mongoose.model("Review",reviewSchema)
