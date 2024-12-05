import { Request, Response, NextFunction } from 'express';
import { registerUser, loginUser } from '../services/userService';

// Controlador para registrar un usuario
export const registerUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, email, phone, password } = req.body;

    // Validación simple
    if (!name || !email || !password) {
      res.status(400).json({ data: { message: 'Name, email, and password are required' } });
      return;
    }

    if (typeof email !== 'string' || !email.includes('@')) {
      res.status(400).json({ data: { message: 'Invalid email format' } });
      return;
    }

    // Llamar al servicio para registrar al usuario
    const user = await registerUser({ name, email, phone, password });
    res.status(201).json({ data: { message: 'User registered successfully', user } });
  } catch (error: any) {
    if (error.message.includes('Email is already registered')) {
      res.status(409).json({ data: { message: 'Email is already registered' } });
    } else {
      next(error); // Pasar el error al middleware de manejo de errores
    }
  }
};

// Controlador para el login
export const loginUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ data: { message: 'Email and password are required' } });
      return;
    }

    const { token, user } = await loginUser({ email, password });

    // Excluir la contraseña del usuario en la respuesta
    const { password: _password, ...userWithoutPassword } = user;

    res.status(200).json({
      data: {
        message: 'Login successful',
        token
      },
    });
  } catch (error: any) {
    if (error.message.includes('Invalid credentials')) {
      res.status(401).json({ data: { message: 'Invalid credentials' } });
    } else {
      next(error);
    }
  }
};
