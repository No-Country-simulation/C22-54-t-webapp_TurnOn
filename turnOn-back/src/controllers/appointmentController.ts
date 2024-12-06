import { Request, Response } from 'express';
import { createAppointment } from '../services/appointmentService';

export const createAppointmentHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, doctorId, date } = req.body;

    // Validación básica
    if (!userId || !doctorId || !date) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    // Llamar al servicio para crear la cita
    const appointment = await createAppointment({
      userId: parseInt(userId, 10),
      doctorId: parseInt(doctorId, 10),
      date: new Date(date),
    });

    res.status(201).json(appointment);
  } catch (error: any) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: error.message });
  }
};
