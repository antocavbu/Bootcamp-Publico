import express from 'express';
import { config, parse } from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import {faker} from '@faker-js/faker';
import { simpleFaker } from '@faker-js/faker'

const app = express();

config(); //para correr la configuración en .env y alojar las variables de entorno

app.use(helmet()); // para seguridad básica del proyecto

app.use(morgan('tiny')); //para registrar las peticiones y errores.

const PORT = 8080; // definición del puerto para el localhost

// configurar el middleware antes del get y post
app.use(express.json()); // para analizar el body de las solicitudes entrantes y almacenarlas en req.body
app.use(express.urlencoded({ extended: true }));// para analizar el body de las solicitudes si viene de un formulario


const generarDuracionCancion = () => {
        const minutos = Math.floor(Math.random() * 60)
        const segundos = Math.floor(Math.random() * 60)
        return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }

const Playlist = {
    idPlaylist:simpleFaker.number.int(30),
    nombre:(faker.word.verb()+' '+faker.word.adverb()),
    canciones:[], // se crea como array cancion para que puedan generarse de forma aleatoria con el metodo POST
    creador:faker.person.fullName(),
    fechaCreacion:faker.date.anytime()
}

app.get('/musica/playlist', (req, res) => {
    return res.status(200).json(Playlist);
}); // metodo get para ver el contenido de playlist

// metodo post para generar nuevas canciones y guardarlas en el array Playlist
app.post('/musica/playlist', (req, res) => {
    const cancion = {
        id:simpleFaker.number.int(10),
        titulo: faker.music.songName(),
        artista:faker.music.artist(),
        album:faker.music.album(),
        duracion: generarDuracionCancion(),
        genero:faker.music.genre(),
        fechaLanzamiento:faker.date.anytime()
    };
    Playlist.canciones.push(cancion);
    return res.status(200).json(Playlist);
});

app.listen(PORT, () => {
    console.log(`El servidor está activo en el puerto: http://localhost:${PORT}`);
  });
  
  