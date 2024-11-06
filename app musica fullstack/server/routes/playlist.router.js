import { Router } from 'express';
import { 
    crearPlaylist, 
    obtenerPlaylists, 
    obtenerPlaylistPorId, 
    actualizarPlaylist, 
    eliminarPlaylist 
} from '../controllers/playlists.controller.js';

const routerPlaylists = Router();

routerPlaylists.get('/api/playlists', obtenerPlaylists);
routerPlaylists.get('/api/playlists/:id', obtenerPlaylistPorId);
routerPlaylists.post('/api/playlists', crearPlaylist);
routerPlaylists.put('/api/playlists/:id', actualizarPlaylist);
routerPlaylists.delete('/api/playlists/:id', eliminarPlaylist);

export default routerPlaylists;