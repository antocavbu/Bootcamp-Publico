import Cancion from '../models/music.model.js';

// Agregar una canción
const AgregarCancion = async (req, res) => {
    try {
        const nuevaCancion = await Cancion.create(req.body);
        res.status(201).json(nuevaCancion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Recuperar todas las canciones
const ListaCanciones = async (req, res) => {
    try {
        const canciones = await Cancion.find();
        if (!canciones.length) {
            return res.status(404).json({ message: 'No se encontraron canciones en la lista' });
        }
        res.status(200).json(canciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Recuperar una sola canción
const EncontrarCancion = async (req, res) => {
    try {
        const cancion = await Cancion.findOne({ title: req.params.title });
        if (!cancion) {
            return res.status(404).json({ message: 'No se encontró la canción, intenta de nuevo con otro título' });
        }
        res.status(200).json(cancion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Editar una canción
const EditarCancion = async (req, res) => {
    try {
        const cancion = await Cancion.findOneAndUpdate({ title: req.params.title }, req.body, { new: true });
        if (!cancion) {
            return res.status(404).json({ message: 'No se pudo editar la canción' });
        }
        res.status(200).json(cancion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Eliminar una canción
const EliminarCancion = async (req, res) => {
    try {
        const cancion = await Cancion.findOneAndDelete({ title: req.params.title });
        if (!cancion) {
            return res.status(404).json({ message: 'No se pudo eliminar la canción' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {
    AgregarCancion,
    ListaCanciones,
    EncontrarCancion,
    EditarCancion,
    EliminarCancion
}


    