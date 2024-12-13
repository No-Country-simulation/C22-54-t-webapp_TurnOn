import prisma from '../prisma';

interface CreateAppointmentInput {
  userId: number;
  doctorId: number;
  date: Date;
}

export const createAppointment = async (input: CreateAppointmentInput) => {
  const { userId, doctorId, date } = input;

  // Verificar que el usuario existe
  const userExists = await prisma.user.findUnique({ where: { id: userId } });
  if (!userExists) {
    throw new Error('User not found');
  }

  // Verificar que el médico existe
  const doctorExists = await prisma.doctor.findUnique({ where: { id: doctorId } });
  if (!doctorExists) {
    throw new Error('Doctor not found');
  }

  // Validar si el médico está disponible para la fecha/hora especificada
  const doctorBusy = await prisma.appointment.findFirst({
    where: {
      doctorId,
      date,
    },
  });
  if (doctorBusy) {
    throw new Error('Doctor is not available at the requested time');
  }

  // Validar que la fecha no sea en el pasado
  if (date < new Date()) {
    throw new Error('Cannot create an appointment in the past');
  }

  // Crear el turno
  const appointment = await prisma.appointment.create({
    data: {
      userId,
      doctorId,
      date,
    },
    include: {
      user: true,
      doctor: {
        include: {
          specialty: true, // Incluye la especialidad del médico
        },
      },
    },
  });
  

  return appointment;
};
