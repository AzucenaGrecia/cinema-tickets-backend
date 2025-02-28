import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Movie from "./models/Movie.js";

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

// Datos ficticios
const peliculas = [
	{
	  title: "Capitán América: Un Nuevo Mundo",
	  description: "Tras reunirse con el recién elegido presidente de Estados Unidos, Sam se encuentra en medio de un incidente internacional y debe descubrir la razón detrás de un complot global antes de que el mundo entero entre en caos.",
	  price: 12.5,
	  director: "Julius Onah",
	  year: "2025",
	  screen: "Sala 1"
	},
	{
	  title: "El Brutalista",
	  description: "La vida del visionario arquitecto László Toth, quien huye de la Europa de posguerra y llega a Estados Unidos para reconstruir su vida, su obra y su matrimonio.",
	  price: 11.0,
	  director: "Brady Corbet",
	  year: "2025",
	  screen: "Sala 2"
	},
	{
	  title: "Attack on Titan: El Ataque Final",
	  description: "El destino del mundo pende de un hilo cuando Eren desata el poder definitivo de los Titanes, dirigiendo un ejército imparable hacia Marley.",
	  price: 10.0,
	  director: "Yûichirô Hayashi",
	  year: "2025",
	  screen: "Sala 3"
	},
	{
	  title: "Flow",
	  description: "Un gato se encuentra en un mundo cubierto de agua y, en su búsqueda de refugio, se une a un barco con animales de otras especies, enfrentando desafíos para superar sus diferencias.",
	  price: 9.5,
	  director: "Gints Zilbalodis",
	  year: "2025",
	  screen: "Sala 4"
	},
	{
	  title: "Operación Panda",
	  description: "Una superestrella internacional de la acción y su asistente participan en una operación de rescate transnacional del misterioso protagonista P.",
	  price: 8.0,
	  director: "Luan Zhang",
	  year: "2025",
	  screen: "Sala 5"
	}
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
