import { model, Schema } from 'mongoose';

// Define el esquema de una canción
const CancionSchema = new Schema({
    title: {
        type: String,
        minlength: [6, "El título debe tener al menos 6 caracteres"],
        maxlength: [255, "El título debe tener como máximo 255 caracteres"],
        required: [true, "¡El título es obligatorio!"]
    },
    artist: {
        type: String,
        required: [true, "¡El artista es obligatorio!"],
        minlength: [6, "El artista debe tener al menos 10 caracteres"],
        maxlength: [255, "El artista debe tener como máximo 255 caracteres"]
    },
    year: {
        type: Number,
        required: [true, "¡El año es obligatorio!"],
        min: [1900, "El año debe ser mayor o igual a 1900"],
        max: [2024, "El año debe ser menor o igual a 2024"]
    },
    genre: {
        type: String,
        required: [true, "¡El género es obligatorio!"],
        minlength: [3, "El género debe tener al menos 3 caracteres"],
        maxlength: [50, "El género debe tener como máximo 50 caracteres"]
    }
}, { timestamps: true });

// Crea el modelo de canción
const Cancion = model("Cancion", CancionSchema);

// Exporta el modelo para usarlo en tu aplicación
export default Cancion;