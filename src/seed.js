import mongoose from "mongoose";
import dotenv from "dotenv";
import Movie from "../models/Movie.js";
import connectDB from "../config/db.js";

dotenv.config();

const movies = [
	{
		title: "The Shawshank Redemption",
		year: 1994,
		director: "Frank Darabont",
		description: "Un banquero es encarcelado injustamente...",
		price: 12.99,
	},
	{
		title: "The Godfather",
		year: 1972,
		director: "Francis Ford Coppola",
		description: "La historia de la familia Corleone...",
		price: 14.99,
	},
];

const seedDatabase = async () => {
	try {
		await connectDB();
		await Movie.deleteMany();
		await Movie.insertMany(movies);
		console.log("Datos insertados correctamente");
		process.exit();
	} catch (error) {
		console.error("Error al insertar datos:", error);
		process.exit(1);
	}
};

seedDatabase();
