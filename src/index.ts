import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usuarioRoutes from './codigos/routes/usuarioRoutes';
import juegoRoutes from './codigos/routes/juegoRoutes';
import path from 'path';
import ventasRoutes from './codigos/routes/ventaRoutes';
import cookieParser from 'cookie-parser';
import categoriasRoutes from './codigos/routes/categoriasRoutes';
import plataformaRoutes from './codigos/routes/plataformasRoutes';
import noticiaRoutes from './codigos/routes/noticiaRoutes';
import estadisticasRoutes from './codigos/routes/estadisticasRoutes';
import comentariosRoutes from './codigos/routes/comentarioRoutes';

dotenv.config();

const app = express();
const rutaImagenes = path.join(process.cwd(), 'imagenes');

// Configurar orígenes permitidos desde variables de entorno
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : [
      'http://localhost:5173',           // Desarrollo local
      'https://dasnellia.github.io',     // GitHub Pages raíz
      'https://dasnellia.github.io/GVFront' // Frontend en GitHub Pages
    ];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Origen no permitido por CORS'));
    }
  },
  credentials: true
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.headers.origin || '');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204); // responde rápido a preflight
  }

  next();
});

app.use(express.json());
app.use(cookieParser());
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/juegos', juegoRoutes);
app.use('/api/ventas', ventasRoutes);
app.use('/static', express.static(path.join(process.cwd(), 'imagenes')));
app.use('/api/categorias', categoriasRoutes);
app.use('/api/plataformas', plataformaRoutes);
app.use('/api/noticias', noticiaRoutes);
app.use('/imagenes', express.static(path.join(process.cwd(), 'imagenes')));
app.use('/api/estadisticas', estadisticasRoutes);
app.use('/api/comentarios', comentariosRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
