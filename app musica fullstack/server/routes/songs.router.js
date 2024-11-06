import {Router} from 'express';
import {ObtenerCanciones, obtenerCancion, CrearCancion, EliminarCancion, ActualizarCancion} from '../controllers/songs.controller.js';

const routerSongs = Router();

routerSongs.get('/api/songs', ObtenerCanciones);
routerSongs.get('/api/songs/:id', obtenerCancion);
routerSongs.post('/api/songs', CrearCancion);
routerSongs.delete('/api/songs/:id', EliminarCancion);
routerSongs.put('/api/songs/:id', ActualizarCancion);

export default routerSongs;




