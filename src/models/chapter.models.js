import mongoose from 'mongoose';

const chapterSchema = new mongoose.Schema(
    {
        book_id: {
            type: Schema.Types.ObjectId,
            ref : "Book"
        },
        chapter_number: {
            type: Number
        },
        title: {
            type: String
        },
        content: {
            type: String
        }
    },{timestamps:true}
)

export const Chapter = mongoose.model("Chapter",chapterSchema);