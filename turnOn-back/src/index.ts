import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import appointmentRoutes from './routes/appointmentRoutes';
import userRoutes from './routes/userRoutes';;
import doctorRoutes from './routes/doctorRoutes';
import specialtyRoutes from './routes/specialtyRoutes';


// Configurar variables de entorno
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Middleware nativo para manejar JSON

// Ruta base para verificar el estado del servidor
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'API is running successfully!',
    timestamp: new Date().toISOString(),
  });
});

// Rutas principales
app.use('/api/users', userRoutes);
app.use('/api', doctorRoutes);
app.use('/api', specialtyRoutes);
app.use('/api/appointments', appointmentRoutes);

// Middleware de manejo de errores
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err : undefined, // Detalles solo en desarrollo
  });
});

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
