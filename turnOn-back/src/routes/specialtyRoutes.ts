import express from 'express';
import {
  getAllSpecialtiesHandler,
  getSpecialtyByIdHandler,
  createSpecialtyHandler,
} from '../controllers/specialtyController';

const router = express.Router();

// Rutas para especialidades
router.get('/specialties', getAllSpecialtiesHandler); // Obtener todas las especialidades
router.get('/specialties/:id', getSpecialtyByIdHandler); // Obtener una especialidad por ID
router.post('/specialties', createSpecialtyHandler); // Crear una nueva especialidad

export default router;
