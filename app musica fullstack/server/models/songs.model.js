import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import Playlist from './playlists.model.js';

const { Schema, model } = mongoose;

const songSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: [3,"Titulo debe ser al menos de 3 caracteres"],
    maxlength: [50,"Titulo debe ser menor a 50 caracteres"]
  },
  artist: {
    type: String,
    required: true,
    minlength: [3,"Artista debe ser al menos de 3 caracteres"],
    maxlength: [50,"Artista debe ser menor a 50 caracteres"]
  },
  genre: {
    type: String,
    required: true,
    minlength: [3,"Genero debe ser al menos de 3 caracteres"],
    maxlength: [50,"Genero debe ser menor a 50 caracteres"]
  },
  album: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    min: [1900,"Año debe ser mayor a 1900"],
    max: [2024,"Año debe ser menor a 2024"]
  }
}, {
  timestamps: true
});

songSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único.' });
// Middleware para eliminar las canciones de las listas de reproducción cuando se elimina una canción
songSchema.pre('remove', async function(next) {
  try {
    await Playlist.updateMany(
      { songs: this._id },
      { $pull: { songs: this._id } }
    );
    next();
  } catch (error) {
    next(error);
  }
});
const Song = model('Song', songSchema);

export default Song;