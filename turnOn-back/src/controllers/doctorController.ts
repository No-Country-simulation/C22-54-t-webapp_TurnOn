import { findDoctorById, getAllDoctors, createDoctor } from '../services/doctorService';
import { Request, Response, NextFunction } from 'express';

export const getDoctorHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const doctor = await findDoctorById(Number(id));

    if (!doctor) {
      res.status(404).json({ message: 'Doctor not found' });
      return;
    }

    res.status(200).json(doctor);
  } catch (error) {
    next(error); // Pasar errores al middleware global
  }
};


export const getAllDoctorsHandler = async (_req: Request, res: Response) => {
  try {
    const doctors = await getAllDoctors();
    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const createDoctorHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, specialtyId } = req.body;
  
      if (!name || !specialtyId) {
        res.status(400).json({ message: 'Name and specialtyId are required' });
        return;
      }
  
      const doctor = await createDoctor(name, Number(specialtyId));
  
      // Transformar la respuesta para omitir el id de la especialidad
      const response = {
        id: doctor.id,
        name: doctor.name,
        rating: doctor.rating,
        specialty: doctor.specialty?.name, // Solo incluye el nombre de la especialidad
      };
  
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };
  

