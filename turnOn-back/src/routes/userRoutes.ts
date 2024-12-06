import { Router } from 'express';
import { registerUserHandler, loginUserHandler } from '../controllers/userController';

const router = Router();

// POST /api/users/register - Registrar un nuevo usuario
router.post('/register', registerUserHandler);

// POST /api/users/login - Login de usuario
router.post('/login', loginUserHandler);

export default router;
