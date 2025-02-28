import Ticket from "../models/Ticket.js";
import Movie from "../models/Movie.js";

// Crear un ticket
export const createTicket = async (req, res) => {
	try {
		const { username, movieId, date, time, tickets, seats } = req.body;

		console.log("movie ID", movieId)

		const movie = await Movie.findById(movieId);
		if (!movie)
			return res.status(404).json({ message: "Película no encontrada" });

		console.log("PELICULA ENCONTRADA", movie);
		
		const totalPrice = movie.price * tickets;

		const newTicket = new Ticket({
			username,
			movieTitle: movie.title,
			date,
			time,
			tickets,
			price: movie.price,
			totalPrice,
			seats,
		});

		await newTicket.save();
		res
			.status(201)
			.json({ message: "Compra realizada con éxito", ticket: newTicket });
	} catch (error) {
		res.status(500).json({ message: "Error al procesar la compra" });
	}
};

// Obtener un ticket por ID
export const getTicketById = async (req, res) => {
	try {
		const ticket = await Ticket.findById(req.params.id);
		if (!ticket)
			return res.status(404).json({ message: "Ticket no encontrado" });
		res.json(ticket);
	} catch (error) {
		res.status(500).json({ message: "Error al obtener el ticket" });
	}
};
