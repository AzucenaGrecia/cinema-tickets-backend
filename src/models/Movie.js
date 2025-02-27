import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
	title: String,
	description: String,
	price: Number,
	availableSeats: [Number],
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
