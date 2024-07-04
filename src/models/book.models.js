import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        author: {
            type: String
        },
        discription: {
            type: String
        },
        cover: {
            type: String
        },
        publication_date: {
            type: String
        },
        genre: {
            type: String
        },
        upload_by: {
            type: Schema.Types.ObjectId
        }
    },{}
)

export const Book = mongoose.model("Book",bookSchema)

