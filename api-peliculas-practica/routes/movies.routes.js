import {Router} from 'express';
import ControladorPeliculas from '../controllers/movies.controller.js';


const routerPeliculas = Router();

routerPeliculas.route('/api/movies')
.get(ControladorPeliculas.obtenerTodosLasPeliculas)
.post(ControladorPeliculas.crearPelicula);

routerPeliculas.route('/api/movies/year/:year').get(ControladorPeliculas.obtenerPeliculaporYear);

routerPeliculas.route('/api/movies/:title')
.delete(ControladorPeliculas.borrarPeliculaporTitle)
.patch(ControladorPeliculas.actualizarPeliculaporTitle)

export default routerPeliculas;