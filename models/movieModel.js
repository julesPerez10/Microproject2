import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
  },
  director: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0
  }
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
