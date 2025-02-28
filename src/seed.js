import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Movie from "./models/Movie.js";

dotenv.config();

const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    description:
      "Un banquero es encarcelado injustamente y encuentra la esperanza en la prisión. Una historia de amistad y redención dentro de los muros de Shawshank.",
    price: 12.99,
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    description:
      "La historia de la familia Corleone y su ascenso en la mafia. Poder, traición y honor en una de las películas más icónicas del cine.",
    price: 14.99,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    description:
      "Batman enfrenta al Joker, un criminal anárquico que sumerge Gotham en el caos. Un thriller oscuro y magistralmente interpretado.",
    price: 13.49,
  },
  {
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    description:
      "Un ladrón experto en robar secretos a través de los sueños debe implantar una idea en la mente de un hombre. ¿Sueño o realidad?",
    price: 11.99,
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    description:
      "Historias entrelazadas de crimen y redención en Los Ángeles, con diálogos brillantes y una narrativa no lineal que revolucionó el cine.",
    price: 13.99,
  },
  {
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    description:
      "Un hombre insomne y un vendedor de jabón carismático crean un club de peleas clandestino que se convierte en un movimiento anarquista.",
    price: 12.49,
  },
  {
    title: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    description:
      "La vida de un hombre con una mente simple que presencia y participa en momentos clave de la historia de EE.UU. con un corazón puro.",
    price: 10.99,
  },
  {
    title: "The Matrix",
    year: 1999,
    director: "Lana Wachowski, Lilly Wachowski",
    description:
      "Un hacker descubre que el mundo en el que vive es una simulación y debe decidir si sigue la verdad o regresa a la ilusión.",
    price: 12.99,
  },
  {
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    description:
      "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad, mientras el tiempo se distorsiona.",
    price: 15.49,
  },
  {
    title: "Gladiator",
    year: 2000,
    director: "Ridley Scott",
    description:
      "Un general romano traicionado se convierte en gladiador y busca vengar la muerte de su familia y la caída de Roma ante la corrupción.",
    price: 13.99,
  },
  {
    title: "Schindler's List",
    year: 1993,
    director: "Steven Spielberg",
    description:
      "Basada en hechos reales, cuenta la historia de un empresario alemán que salvó a más de mil judíos durante el Holocausto.",
    price: 14.49,
  },
  {
    title: "The Silence of the Lambs",
    year: 1991,
    director: "Jonathan Demme",
    description:
      "Una agente del FBI busca la ayuda de un brillante pero peligroso asesino en serie, Hannibal Lecter, para atrapar a otro criminal.",
    price: 12.99,
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();
    await Movie.deleteMany();
    await Movie.insertMany(movies);
    console.log("Datos insertados correctamente");
    process.exit();
  } catch (error) {
    console.error("Error al insertar datos:", error);
    process.exit(1);
  }
};

seedDatabase();
