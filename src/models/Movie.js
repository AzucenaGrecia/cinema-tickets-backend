import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
	title: { type: String, required: true },
	year: { type: Number, required: true },
	director: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
