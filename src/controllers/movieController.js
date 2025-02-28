import Movie from "../models/Movie.js";
import mongoose from "mongoose"; // Importa Mongoose

// 📌 GET /api/movie -> Listar todas las películas
export const getMovies = async (req, res) => {
	try {
		const movies = await Movie.find();
		res.status(200).json(movies);
	} catch (error) {
		console.log("Error in feteching products", error.message);
		res.status(500).json({ message: "Error al obtener las películas" });
	}
};

// 📌 GET /api/movie/:id -> Obtener detalles de una película
export const getMovieById = async (req, res) => {
	try {
		const movie = await Movie.findById(req.params.id);
		if (!movie)
			return res.status(404).json({ message: "Película no encontrada" });
		res.status(200).json(movie);
	} catch (error) {
		console.log("Error in feteching products", error.message);
		res.status(500).json({ message: "Error al obtener la película" });
	}
};
