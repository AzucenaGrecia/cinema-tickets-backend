import Ticket from "../models/Ticket.js";
import Movie from "../models/Movie.js";
import crypto from "crypto";
import { buyDTO } from "../models/dataBuyDTO.js";

// 📌 POST /api/pay -> Generar ticket después de la compra
export const createTicket = async (req, res) => {
	try {
		
		const buyData = { ...buyDTO, ...req.body };


		const movie = await Movie.findById(buyData.movieId);
		if (!movie)
			return res.status(404).json({ message: "Película no encontrada" });


		const ticketCode = crypto.randomBytes(8).toString("hex");

		const newTicket = await Ticket.create({
			movieId: buyData.movieId,
			userName: buyData.userName,
			userEmail: buyData.userEmail,
			separatedSeats: buyData.separatedSeats,
			ticketCode: ticketCode,
			unitPrice: movie.price,
			numbertickets: buyData.numbertickets,
			totalPrice: buyData.totalPrice,
			date: buyData.date,
			hour: buyData.hour,
		});


		res.json({ ticket_id: newTicket._id });
	} catch (error) {
		res.status(500).json({ message: "Error al generar el ticket" });
	}
};

// 📌 GET /api/ticket/:ticket_id -> Obtener detalles del ticket
export const getTicketById = async (req, res) => {
	try {
		const ticket = await Ticket.findById(req.params.ticket_id);
		if (!ticket)
			return res.status(404).json({ message: "Ticket no encontrado" });
		res.json(ticket);
	} catch (error) {
		res.status(500).json({ message: "Error al obtener el ticket" });
	}
};
