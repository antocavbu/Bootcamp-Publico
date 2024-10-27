import {Router} from 'express';
import {AgregarPlaylist, obtenerPlaylistConCanciones, actualizarPlaylistConCanciones, ListarPlaylist} from '../controllers/playlist.controller.js';

const rutaPlaylist = Router();

//Agregar una playlist
rutaPlaylist.post('/create/playlist', AgregarPlaylist);

// Listar todas las playlists
rutaPlaylist.get('/playlist', ListarPlaylist);

// Obtener una playlist con canciones por nombre
rutaPlaylist.get('/playlist/:nombre', obtenerPlaylistConCanciones);

// Actualizar una playlist con canciones
rutaPlaylist.put('/playlist/:nombre/songs', actualizarPlaylistConCanciones);
export default rutaPlaylist;