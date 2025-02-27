import Ticket from "../models/Ticket.js";
import Movie from "../models/Movie.js";
import crypto from "crypto";

// 📌 POST /api/pay -> Generar ticket después de la compra
export const createTicket = async (req, res) => {
	try {
		const { movieId, userEmail, separatedSeats } = req.body;

		const movie = await Movie.findById(movieId);
		if (!movie)
			return res.status(404).json({ message: "Película no encontrada" });

		// Verificar si los asientos están disponibles
		const availableSeats = movie.availableSeats.filter(
			(seat) => !separatedSeats.includes(seat)
		);
		if (
			availableSeats.length + separatedSeats.length !==
			movie.availableSeats.length
		) {
			return res
				.status(400)
				.json({ message: "Uno o más asientos ya están ocupados" });
		}

		// Actualizar asientos disponibles
		movie.availableSeats = availableSeats;
		await movie.save();

		// Generar código único de ticket
		const ticketCode = crypto.randomBytes(8).toString("hex");

		// Crear el ticket
		const newTicket = await Ticket.create({
			movieId,
			userEmail,
			separatedSeats,
			ticketCode,
		});

		res.json({ ticket_id: newTicket._id, ticketCode });
	} catch (error) {
		res.status(500).json({ message: "Error al generar el ticket" });
	}
};

// 📌 GET /api/ticket/:ticket_id -> Obtener detalles del ticket
export const getTicketById = async (req, res) => {
	try {
		const ticket = await Ticket.findById(req.params.ticket_id).populate(
			"movieId"
		);
		if (!ticket)
			return res.status(404).json({ message: "Ticket no encontrado" });

		res.json(ticket);
	} catch (error) {
		res.status(500).json({ message: "Error al obtener el ticket" });
	}
};
