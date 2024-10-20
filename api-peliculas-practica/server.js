import express from "express";
import routerPeliculas from "./routes/movies.routes.js";

const app = express();

const PORT = 8080;
// middleware para analizar el cuerpo de la solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(routerPeliculas);

//app.listen
app.listen(PORT, () => {
    console.log(` el servidor esta funcionando en http://localhost:${PORT}`);
});