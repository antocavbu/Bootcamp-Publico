import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import conectarDB from './config/music.config.js';
import rutamusica from './routes/music.router.js';


dotenv.config(); //para correr la configuración en .env y alojar las variables de entorno
const app = express();

app.use(helmet()); // para seguridad básica del proyecto
app.use(morgan('tiny')); //para registrar las peticiones y errores.

const PORT = process.env.PORT || 8000; // definición del puerto para el localhost

conectarDB(); // para conectarse a la base de datos


// configurar el middleware antes del get y post
app.use(express.json()); // para analizar el body de las solicitudes entrantes y almacenarlas en req.body
app.use(express.urlencoded({ extended: true }));// para analizar el body de las solicitudes si viene de un formulario

app.use(rutamusica); // para usar las rutas

app.listen(PORT, () => {
    console.log(`El servidor está activo en el puerto: http://localhost:${PORT}`);
  });
  
  