import express from 'express';
import { getDoctorHandler, getAllDoctorsHandler, createDoctorHandler } from '../controllers/doctorController';

const router = express.Router();

router.get('/doctors/:id', getDoctorHandler); // Ruta para obtener un doctor por ID
router.get('/doctors', getAllDoctorsHandler); // Ruta para listar todos los doctores
router.post('/doctors', createDoctorHandler); // Ruta para crear un nuevo doctor

export default router;
