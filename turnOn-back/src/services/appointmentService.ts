import prisma from '../prisma';

interface CreateAppointmentInput {
  userId: number; // Cambiado a number
  doctorId: number; // Cambiado a number
  date: Date;
}

export const createAppointment = async (input: CreateAppointmentInput) => {
  const { userId, doctorId, date } = input;

  // Verificar que el usuario existe
  const userExists = await prisma.user.findUnique({ where: { id: userId } }); // userId como número
  if (!userExists) {
    throw new Error('User not found');
  }

  // Verificar que el médico existe
  const doctorExists = await prisma.doctor.findUnique({ where: { id: doctorId } }); // doctorId como número
  if (!doctorExists) {
    throw new Error('Doctor not found');
  }

  // Crear el turno
  const appointment = await prisma.appointment.create({
    data: {
      userId,
      doctorId,
      date,
    },
  });

  return appointment;
};
