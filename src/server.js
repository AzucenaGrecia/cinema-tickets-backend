import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";
import ticketRoutes from "./routes/ticketRoutes.js";

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api/movie", movieRoutes);
app.use("/api", ticketRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
	console.log(`🚀 Servidor corriendo en el puerto ${PORT}`)
);
