import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
	title: String,
	description: String,
	price: Number,
	director: String,
	year: String,
	screen: String
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
