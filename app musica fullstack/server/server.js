import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import routerSongs from './routes/songs.router.js';
import routerPlaylists from './routes/playlist.router.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({origin: 'http://localhost:5173'}));
app.use(routerSongs);
app.use(routerPlaylists);

//Middleware para rutas
app.use((req,res,next) => {
    const err = new Error('Ruta no encontrada');
    err.statusCode = 400;
    next(err);
});
//Middleware para normalizar errores
app.use((err,req,res,next) => {
    console.log(err)
    const errorNormalizado = {
    statusCode: err.statusCode || 500,
    mensaje: err.message || '¡Algo salió mal!',
    nombre: err.name
    };
    res.status(errorNormalizado.statusCode).json(errorNormalizado);
});

const PORT = process.env.PORT || 8000;

dbConnect();

app.listen(PORT, () => {
    console.log(`¡Escuchando en el puerto: ${PORT}!`);
});