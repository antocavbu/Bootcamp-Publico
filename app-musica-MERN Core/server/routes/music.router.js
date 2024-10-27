import {
    AgregarCancion,
    ListaCanciones,
    EncontrarCancion,
    EditarCancion,
    EliminarCancion
} from '../controllers/music.controller.js';

import { Router } from 'express';

const rutamusica = Router();

// Agregar una canción
rutamusica.post('/musica/song', AgregarCancion);

// Recuperar todas las canciones
rutamusica.get('/songs', ListaCanciones);

// Recuperar una canción por título
rutamusica.get('/song/:title', EncontrarCancion);

// Editar una canción por título
rutamusica.put('/musica/song/:title', EditarCancion);    

// Eliminar una canción por título
rutamusica.delete('/musica/song/:title', EliminarCancion);

export default rutamusica;