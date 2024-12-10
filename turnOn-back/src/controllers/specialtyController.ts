import { Request, Response, NextFunction } from 'express';
import { getAllSpecialties, findSpecialtyById, createSpecialty } from '../services/specialtyService';

/**
 * Handler para obtener todas las especialidades.
 */
export const getAllSpecialtiesHandler = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const specialties = await getAllSpecialties();
    res.status(200).json(specialties);
  } catch (error) {
    next(error);
  }
};

/**
 * Handler para obtener una especialidad por ID.
 */
export const getSpecialtyByIdHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const specialty = await findSpecialtyById(Number(id));

    if (!specialty) {
      res.status(404).json({ message: 'Specialty not found' });
      return;
    }

    res.status(200).json(specialty);
  } catch (error) {
    next(error);
  }
};

/**
 * Handler para crear una nueva especialidad.
 */
export const createSpecialtyHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;

    if (!name) {
      res.status(400).json({ message: 'Name is required' });
      return;
    }

    const specialty = await createSpecialty(name);
    res.status(201).json(specialty);
  } catch (error) {
    next(error);
  }
};
