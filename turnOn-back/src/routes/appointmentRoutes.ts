import { Router } from 'express';
import { getAllAppointments, createAppointment } from '../controllers/appointmentController';

const router = Router();

router.get('/', getAllAppointments);
router.post('/', createAppointment);

export default router;
