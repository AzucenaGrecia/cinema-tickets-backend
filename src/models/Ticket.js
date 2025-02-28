import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
	{
		username: { type: String, required: true },
		movieTitle: { type: String, required: true },
		date: {
			type: String,
			enum: ["Hoy", "Mañana", "Pasado mañana"],
			required: true,
		},
		time: {
			type: String,
			enum: ["1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM"],
			required: true,
		},
		tickets: { type: Number, required: true, min: 1 }, // Cantidad de boletos
		price: { type: Number, required: true }, // Precio por unidad
		totalPrice: { type: Number, required: true }, // Precio total (tickets * price)
		seats: {
			type: [String],
			required: true,
			validate: {
				validator: function (seats) {
					return seats.length > 0; // Debe haber al menos un asiento seleccionado
				},
				message: "Debes seleccionar al menos un asiento.",
			},
		},
	},
	{ timestamps: true }
);

const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;
