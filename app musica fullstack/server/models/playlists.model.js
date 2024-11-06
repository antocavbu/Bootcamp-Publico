import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const playlistSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, "El nombre de la playlist debe ser al menos de 3 caracteres"],
    maxlength: [50, "El nombre de la playlist debe ser menor a 50 caracteres"]
  },
  songs: [{
    type: Schema.Types.ObjectId,
    ref: 'Song'
  }]
}, {
  timestamps: true
});

const Playlist = mongoose.model('Playlist', playlistSchema);

export default Playlist;