import mongoose from 'mongoose';

const readingSchema = new mongoose.Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        book_id: {
            type: Schema.Types.ObjectId,
            ref: "Book"
        },
        chapter_id: {
            type: Schema.Types.ObjectId,
            ref: "Chater"
        },
        last_read_date: {
            type: String
        }
    },{timeStamps:true}
)

export const Reading = mongoose.model("Reading",readingSchema);