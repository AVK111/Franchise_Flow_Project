import express from 'express';
const router = express.Router();

// Import controllers
import { register, login, logout, getMe } from '../controllers/auth.js';

// Import middleware
import { protect } from '../middleware/auth.js';

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me', protect, getMe);

export default router;
