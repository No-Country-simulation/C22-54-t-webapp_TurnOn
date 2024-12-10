import prisma from '../prisma';

/**
 * Busca un doctor por su ID.
 * @param doctorId ID del doctor.
 * @returns El doctor encontrado o null si no existe.
 */
export const findDoctorById = async (doctorId: number) => {
  return await prisma.doctor.findUnique({
    where: { id: doctorId },
    include: {
      specialty: true, // Incluye la especialidad del doctor
    },
  });
};

/**
 * Lista todos los doctores.
 * @returns Lista de doctores.
 */
export const getAllDoctors = async () => {
  return await prisma.doctor.findMany({
    include: {
      specialty: true,
    },
  });
};

/**
 * Crea un nuevo doctor.
 * @param name Nombre del doctor.
 * @param specialtyId ID de la especialidad.
 * @returns Doctor creado.
 */
export const createDoctor = async (name: string, specialtyId: number) => {
    const specialtyExists = await prisma.specialty.findUnique({ where: { id: specialtyId } });
    if (!specialtyExists) {
      throw new Error('Specialty not found');
    }
  
    return await prisma.doctor.create({
      data: {
        name,
        specialtyId,
      },
      include: {
        specialty: true, // Incluye la información de la especialidad en la respuesta
      },
    });
  };
  
