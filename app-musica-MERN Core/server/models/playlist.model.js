import { model, Schema } from 'mongoose';

// Define el esquema de una playlist
const PlaylistSchema = new Schema({
    nombre: {
        type: String,
        minlength: [3, "El título debe tener al menos 3 caracteres"],
        maxlength: [255, "El título debe tener como máximo 255 caracteres"],
        required: [true, "¡El título es obligatorio!"]
    },
    descripcion: {
        type: String,
        required: [true, "¡La descripción es obligatoria!"],
        maxlength: [255, "La descripción debe tener como máximo 255 caracteres"]
    },
    songs:[{
        type: Schema.Types.ObjectId,
        ref: "Cancion", // Referencia al modelo de Cancion
        default: []
    }]
}, { timestamps: true });

// Crea el modelo de playlist
const Playlist = model("Playlist", PlaylistSchema);

export default Playlist;

