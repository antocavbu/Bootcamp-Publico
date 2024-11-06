import Playlist from '../models/playlists.model.js';
import Song from '../models/songs.model.js';

//Crear Playlist
const crearPlaylist = async (req, res) => {
    try {
        const { name, songs } = req.body;
        const playlist = new Playlist({ name, songs });
        await playlist.save();
        res.status(201).json(playlist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}
// Obtener todas las playlists
 const obtenerPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find().populate('songs', 'title');
        res.status(200).json(playlists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una playlist por ID
 const obtenerPlaylistPorId = async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id).populate('songs', 'title artist');
        if (!playlist) {
            return res.status(404).json({ message: 'Playlist no encontrada' });
        }
        res.status(200).json(playlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una playlist por ID, incluyendo agregar y eliminar canciones
const actualizarPlaylist = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, songs } = req.body;
      const updatedPlaylist = await Playlist.findByIdAndUpdate(
        id,
        { name, songs },
        { new: true, runValidators: true }
      );
      if (!updatedPlaylist) {
        return res.status(404).json({ message: 'Playlist not found' });
      }
      res.status(200).json(updatedPlaylist);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  


// Eliminar una playlist por ID
const eliminarPlaylist = async (req, res) => {
    try {
        const playlist = await Playlist.findByIdAndDelete(req.params.id);
        if (!playlist) {
            return res.status(404).json({ message: 'Playlist no encontrada' });
        }
        res.status(200).json({ message: 'Playlist eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { crearPlaylist, obtenerPlaylists, obtenerPlaylistPorId, actualizarPlaylist, eliminarPlaylist };