import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required:true

        },
        author: {
            type: String,
            required:true
        },
        discription: {
            type: String
        },
        cover: {
            type: String
        },
        publication_date: {
            type: String,
            required:true
        },
        genre: {
            type: String
        },
        upload_by: {
            type: Schema.Types.ObjectId
        }
    },{timestamps:true}
)

export const Book = mongoose.model("Book",bookSchema)

