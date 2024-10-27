import Playlist from "../models/playlist.model.js";
import Cancion from "../models/music.model.js";


// Agregar una playlist
const AgregarPlaylist = async (req, res) => {
    try {
        const nuevaPlaylist = await Playlist.create(req.body);
        res.status(201).json(nuevaPlaylist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
// Lista las playlists exitentes
const ListarPlaylist = async (req, res) => {
    try {
        const playlist = await Playlist.find();
        if (!playlist.length) {
            return res.status(404).json({ message: 'No se encontraron playlists en la lista' });
        }
        res.status(200).json(playlist);
    } catch (error) {   
        res.status(500).json({ message: error.message });
    }
}

// Recuperar una playlist con sus canciones
const obtenerPlaylistConCanciones = async (req, res) => {
    try {
        const { nombre } = req.params;
        const playlist = await Playlist.findOne({ nombre }).populate('songs');

        if (!playlist) {
            return res.status(404).json({ message: 'Playlist no encontrada' });
        }

        res.status(200).json(playlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Actualizar una playlist con nuevas canciones
const actualizarPlaylistConCanciones = async (req, res) => {
    try {
        const { nombre } = req.params;
        const { songs } = req.body;

        console.log(`Buscando playlist con nombre: ${nombre}`);

        const playlist = await Playlist.findOne({ nombre }).populate('songs');

        if (!playlist) {
            console.log('Playlist no encontrada');
            return res.status(404).json({ message: 'Playlist no encontrada' });
        }

        console.log('Playlist encontrada:', playlist);

        for (const songData of songs) {
            const { title, artist, year, genre } = songData;
            console.log(`Procesando canción: ${title}, ${artist}, ${year}, ${genre}`);

            // Verifica si la canción ya existe en la base de datos
            let cancionExistente = await Cancion.findOne({ title, artist, year, genre });
            if (!cancionExistente) {
                // Si la canción no existe, créala
                cancionExistente = new Cancion({ title, artist, year, genre });
                await cancionExistente.save();
            }

            // Verifica si la canción ya está en la playlist
            if (!playlist.songs.some(song => song._id.equals(cancionExistente._id))) {
                // Agrega la canción a la playlist si no está ya presente
                playlist.songs.push(cancionExistente._id);
            }
        }

        // Guarda la playlist actualizada
        await playlist.save();

        res.status(200).json(playlist);
    } catch (error) {
        console.error('Error al actualizar la playlist:', error);
        res.status(500).json({ message: error.message });
    }
};

export { actualizarPlaylistConCanciones, AgregarPlaylist,ListarPlaylist, obtenerPlaylistConCanciones};