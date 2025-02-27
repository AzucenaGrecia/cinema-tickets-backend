import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
	movieId: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
	userEmail: String,
	separatedSeats: [Number],
	ticketCode: String,
	createdAt: { type: Date, default: Date.now },
});

const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;
