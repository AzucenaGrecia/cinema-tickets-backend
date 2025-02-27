import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Movie from "./models/Movie.js";

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

// Datos ficticios
const movies = [
	{
		title: "Avengers: Endgame",
		description:
			"Los Vengadores se unen para derrotar a Thanos y restaurar el universo.",
		price: 12.5,
		availableSeats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	},
	{
		title: "Spider-Man: No Way Home",
		description:
			"Peter Parker enfrenta las consecuencias de su identidad revelada y busca ayuda en el Doctor Strange.",
		price: 10.0,
		availableSeats: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
	},
	{
		title: "Inception",
		description:
			"Un ladrón que roba secretos a través de los sueños es contratado para implantar una idea.",
		price: 11.0,
		availableSeats: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
	},
];

// Función para poblar la base de datos
const seedDatabase = async () => {
	try {
		await Movie.deleteMany(); // Borra todos los datos previos
		await Movie.insertMany(movies); // Inserta los datos ficticios
		console.log("✅ Datos insertados correctamente");
		process.exit();
	} catch (error) {
		console.error("❌ Error insertando datos:", error);
		process.exit(1);
	}
};

seedDatabase();
