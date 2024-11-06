import Song from '../models/songs.model.js';
import Playlist from '../models/playlists.model.js';

const CrearCancion = async (req, res) => {
  try {
    const { title, artist, genre, album, year } = req.body
    if (!title || !artist || !genre || !album || !year) {
      return res.status(400).json({ message: 'Faltan campos obligatorios' })
    }
    if(title.length <3 || title.length > 50){
      return res.status(400).json({ message: 'El título debe tener entre 3 y 50 caracteres' });
    }
    if(artist.length <3 || artist.length > 50){
      return res.status(400).json({ message: 'El artista debe tener entre 3 y 50 caracteres' });
    }
    if(genre.length <3 || genre.length > 50){
      return res.status(400).json({ message: 'El genero debe tener entre 3 y 50 caracteres' });
    }
    if(year < 1900 || year > 2024){
      return res.status(400).json({ message: 'El año debe estar entre 1900 y 2024' });
    }
    const song = new Song({ title, artist, genre, album, year  })
    await song.save()
    res.status(201).json(song)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const ObtenerCanciones = async (req, res) => {
  try {
    const songs = await Song.find()
    res.status(200).json(songs)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const obtenerCancion = async (req, res) => {
  try {
    const { id } = req.params
    const song = await Song.findById(id)
    res.status(200).json(song)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const EliminarCancion = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: 'Canción no encontrada' });
    }
    // Eliminar la canción de las playlists
    await Playlist.updateMany(
      { songs: song._id },
      { $pull: { songs: song._id } }
    );
    // Eliminar la canción
    await song.deleteOne();

    res.status(200).json({ message: 'Canción eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const ActualizarCancion = async (req, res) => {
  const { title, artist, album, genre, year } = req.body;

  // Validaciones
  if (!title || !artist || !album || !genre || !year) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }
  if (title.length < 3 || title.length > 50) {
    return res.status(400).json({ message: 'El título debe tener entre 3 y 50 caracteres' });
  }
  if (artist.length < 3 || artist.length > 50) {
    return res.status(400).json({ message: 'El artista debe tener entre 3 y 50 caracteres' });
  }
  if (album.length < 3 || album.length > 50) {
    return res.status(400).json({ message: 'El álbum debe tener entre 3 y 50 caracteres' });
  }
  if (genre.length < 3 || genre.length > 50) {
    return res.status(400).json({ message: 'El género debe tener entre 3 y 50 caracteres' });
  }
  if (year < 1900 || year > new Date().getFullYear()) {
    return res.status(400).json({ message: `El año debe estar entre 1900 y ${new Date().getFullYear()}` });
  }

  try {
    const { id } = req.params;
    const song = { title, artist, album, genre, year };
    const updatedSong = await Song.findByIdAndUpdate(id, song, { new: true });
    if (!updatedSong) {
      return res.status(404).json({ message: 'Canción no encontrada' });
    }
    res.json(updatedSong);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export { CrearCancion, ObtenerCanciones, obtenerCancion, EliminarCancion, ActualizarCancion };