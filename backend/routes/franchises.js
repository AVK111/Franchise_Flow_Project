import express from 'express';
const router = express.Router();

// Import controllers
import { 
  getFranchises,
  getFranchise,
  createFranchise,
  updateFranchise,
  deleteFranchise
} from '../controllers/franchises.js';

// Import middleware
import { protect, authorize } from '../middleware/auth.js';

router.route('/')
  .get(getFranchises)
  .post(protect, authorize('franchisor', 'admin'), createFranchise);

router.route('/:id')
  .get(getFranchise)
  .put(protect, authorize('franchisor', 'admin'), updateFranchise)
  .delete(protect, authorize('franchisor', 'admin'), deleteFranchise);

export default router;
