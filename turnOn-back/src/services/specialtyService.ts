import prisma from '../prisma';

/**
 * Obtener todas las especialidades.
 * @returns Lista de especialidades.
 */
export const getAllSpecialties = async () => {
  return await prisma.specialty.findMany();
};

/**
 * Buscar una especialidad por ID.
 * @param id ID de la especialidad.
 * @returns Especialidad encontrada o null.
 */
export const findSpecialtyById = async (id: number) => {
  return await prisma.specialty.findUnique({
    where: { id },
  });
};

/**
 * Crear una nueva especialidad.
 * @param name Nombre de la especialidad.
 * @returns Especialidad creada.
 */
export const createSpecialty = async (name: string) => {
  return await prisma.specialty.create({
    data: { name },
  });
};
