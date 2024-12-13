import { Request, Response } from 'express';
import { createAppointment } from '../services/appointmentService';

export const createAppointmentHandler = async (req: Request, res: Response) => {
  try {
    const { userId, doctorId, date } = req.body;

    // Crear la cita
    const appointment = await createAppointment({
      userId: Number(userId),
      doctorId: Number(doctorId),
      date: new Date(date),
    });

    // Respuesta mejorada
    res.status(201).json({
      success: true,
      message: 'Appointment created successfully!',
      data: {
        id: appointment.id,
        date: appointment.date,
        user: {
          id: appointment.user.id,
          name: appointment.user.name,
          email: appointment.user.email,
        },
        doctor: {
          id: appointment.doctor.id,
          name: appointment.doctor.name,
          specialty: appointment.doctor.specialty?.name || 'N/A', // Nombre de la especialidad
        },
      },
    });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: error.message || 'An error occurred while creating the appointment',
    });
  }
};
