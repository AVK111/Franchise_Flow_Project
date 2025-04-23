import express from 'express';
const router = express.Router();

// Import controllers
import { 
  getApplications,
  getApplication,
  createApplication,
  updateApplication,
  deleteApplication,
  updateApplicationStatus
} from '../controllers/applications.js';

// Import middleware
import { protect, authorize } from '../middleware/auth.js';

router
  .route('/')
  .get(protect, getApplications)
  .post(protect, authorize('franchisee'), createApplication);

router
  .route('/:id')
  .get(protect, getApplication)
  .put(protect, updateApplication)
  .delete(protect, deleteApplication);

router
  .route('/:id/status')
  .put(protect, authorize('franchisor', 'admin'), updateApplicationStatus);

export default router;
