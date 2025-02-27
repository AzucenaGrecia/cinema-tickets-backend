import Movie from "../models/Movie.js";

// 📌 GET /api/movie -> Listar todas las películas
export const getMovies = async (req, res) => {
	try {
		const movies = await Movie.find();
		res.json(movies);
	} catch (error) {
		res.status(500).json({ message: "Error al obtener las películas" });
	}
};

// 📌 GET /api/movie/:id -> Obtener detalles de una película
export const getMovieById = async (req, res) => {
	try {
		const movie = await Movie.findById(req.params.id);
		if (!movie)
			return res.status(404).json({ message: "Película no encontrada" });
		res.json(movie);
	} catch (error) {
		res.status(500).json({ message: "Error al obtener la película" });
	}
};
