
const express = require('express');
const { 
  getFranchises,
  getFranchise,
  createFranchise,
  updateFranchise,
  deleteFranchise
} = require('../controllers/franchises');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(getFranchises)
  .post(protect, authorize('franchisor', 'admin'), createFranchise);

router
  .route('/:id')
  .get(getFranchise)
  .put(protect, authorize('franchisor', 'admin'), updateFranchise)
  .delete(protect, authorize('franchisor', 'admin'), deleteFranchise);

module.exports = router;
