# cinema-tickets-backend

# 📽️ Cinema API

Una API para gestionar información de películas en un cine.

## 🚀 Requisitos previos
Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (la base de datos debe llamarse **Cinema**)


## ▶️ Ejecución
1. Asegúrate de que MongoDB esté corriendo y tenga una base de datos llamada **Cinema**.
2. Pobla la base de datos con datos iniciales:
   ```sh
   node src/seed.js
   ```
3. Inicia el servidor:
   ```sh
   node src/server.js
   ```