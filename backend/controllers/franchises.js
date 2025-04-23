import Franchise from '../models/Franchise.js';

// @desc    Get all franchises
// @route   GET /api/v1/franchises
// @access  Public
export const getFranchises = async (req, res) => {
  try {
    const franchises = await Franchise.find();
    res.status(200).json({
      success: true,
      count: franchises.length,
      data: franchises
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Get single franchise
// @route   GET /api/v1/franchises/:id
// @access  Public
export const getFranchise = async (req, res) => {
  try {
    const franchise = await Franchise.findById(req.params.id);

    if (!franchise) {
      return res.status(404).json({
        success: false,
        message: 'Franchise not found'
      });
    }

    res.status(200).json({
      success: true,
      data: franchise
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Create new franchise
// @route   POST /api/v1/franchises
// @access  Private
export const createFranchise = async (req, res) => {
  try {
    // Add user to req.body
    req.body.user = req.user.id;

    const franchise = await Franchise.create(req.body);

    res.status(201).json({
      success: true,
      data: franchise
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Update franchise
// @route   PUT /api/v1/franchises/:id
// @access  Private
export const updateFranchise = async (req, res) => {
  try {
    let franchise = await Franchise.findById(req.params.id);

    if (!franchise) {
      return res.status(404).json({
        success: false,
        message: 'Franchise not found'
      });
    }

    // Make sure user is franchise owner
    if (franchise.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to update this franchise'
      });
    }

    franchise = await Franchise.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: franchise
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Delete franchise
// @route   DELETE /api/v1/franchises/:id
// @access  Private
export const deleteFranchise = async (req, res) => {
  try {
    const franchise = await Franchise.findById(req.params.id);

    if (!franchise) {
      return res.status(404).json({
        success: false,
        message: 'Franchise not found'
      });
    }

    // Make sure user is franchise owner
    if (franchise.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to delete this franchise'
      });
    }

    await franchise.deleteOne();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}; 