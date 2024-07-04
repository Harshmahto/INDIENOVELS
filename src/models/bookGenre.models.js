import mongoose from 'mongoose';

const bookgenreSchema = new mongoose.Schema({
    book_id: {
      type: Schema.Types.ObjectId,
      ref: "Book"
    },
    genre_id: {
      type: Schema.Types.ObjectId,
      ref: "Genre"
    }
  },{timestamps:true}
)

export const Book_genre = mongoose.model("Book_genre",bookgenreSchema);