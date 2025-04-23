
const express = require('express');
const { 
  getApplications,
  getApplication,
  createApplication,
  updateApplication,
  deleteApplication,
  updateApplicationStatus
} = require('../controllers/applications');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

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

module.exports = router;
