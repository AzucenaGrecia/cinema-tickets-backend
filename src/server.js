import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";
import ticketRoutes from "./routes/ticketRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/movies", movieRoutes);
app.use("/api/tickets", ticketRoutes);

app.get("/", (req, res) => {
	res.send("API de Cine funcionando 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto ${PORT}`);
});
