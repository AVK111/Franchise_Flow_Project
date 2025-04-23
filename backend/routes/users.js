import express from 'express';
const router = express.Router();

// Import controllers
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/users.js';

// Import middleware
import { protect, authorize } from '../middleware/auth.js';

router.route('/')
  .get(protect, authorize('admin'), getUsers);

router.route('/:id')
  .get(protect, getUser)
  .put(protect, updateUser)
  .delete(protect, authorize('admin'), deleteUser);

export default router; 