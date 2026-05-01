import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';  // Para parsear los datos del formulario
import router from './routes';  // Importa las rutas correctamente
import session from 'express-session';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');

// Configurar la carpeta donde se encuentran las vistas EJS
app.set('views', path.join(__dirname, '..', '..', 'src', 'views'));

// Configurar la ruta para los archivos estáticos en 'public'
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

// Middleware para parsear los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));  // Asegúrate de que esté configurado
app.use(bodyParser.json());  // Este es para JSON

app.use(cors({ 
  origin: process.env.NODE_ENV === 'production' ? false : 'http://localhost:4000', // En producción permite cualquier origen
  methods: ['GET', 'POST'], 
  allowedHeaders: ['Content-Type'],
}));

// Configuración de las rutas
app.use('/', router);

// Configuración de las sesiones
app.use(session({
  secret: 'fas5zr23rdrt5yt6wqsded58zd24', // Cambia esta clave por una clave secreta de tu elección
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  // Si estás usando https, cambia esto a true
}));

// Iniciar el servidor solo en desarrollo
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
}

// Exportar la aplicación para Vercel
export default app;