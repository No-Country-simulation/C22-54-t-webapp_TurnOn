import { Router } from 'express';
import { createAppointmentHandler } from '../controllers/appointmentController';

const router = Router();

// POST /api/appointments - Crear una nueva cita
router.post('/',createAppointmentHandler);

export default router;
