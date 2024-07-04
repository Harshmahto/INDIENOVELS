import mongoose from 'mongoose';

const genreSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
            
        }
    },{timestamps:true}
)


export const Genre = mongoose.model("Genre",genreSchema);