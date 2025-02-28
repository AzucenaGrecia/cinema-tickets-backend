import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
	movieId: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
	separatedSeats: [String],
	ticketCode: String,
	userName: String,
	userEmail: String,
	unitPrice: Number,
    numbertickets: Number,
    totalPrice: Number,
    date: Date,
    hour:String,
});

const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;
