import { Request, Response } from 'express';
import prisma from '../prismaClient';

export const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await prisma.appointment.findMany({
      include: { user: true },
    });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo los turnos' });
  }
};

export const createAppointment = async (req: Request, res: Response) => {
  const { date, userId } = req.body;
  try {
    const appointment = await prisma.appointment.create({
      data: { date: new Date(date), userId },
    });
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ error: 'Error creando el turno' });
  }
};
