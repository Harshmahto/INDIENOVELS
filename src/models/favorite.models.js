import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema(
    {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    book_id: {
      type: Schema.Types.ObjectId,
      ref: "Book"
    },
    favorite_date: {
      type: String
    }
  },{timestamps:true}
)


export const Favorite = mongoose.model("Favorite",favoriteSchema);