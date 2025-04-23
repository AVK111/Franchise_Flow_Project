
const mongoose = require('mongoose');

const franchiseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a franchise name'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [2000, 'Description cannot be more than 2000 characters']
  },
  logo: {
    type: String,
    default: 'default-franchise-logo.jpg'
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: [
      'Food & Beverage',
      'Retail',
      'Home Services',
      'Health & Fitness',
      'Education',
      'Automotive',
      'Business Services',
      'Entertainment',
      'Other'
    ]
  },
  location: {
    type: String,
    required: [true, 'Please add a location'],
    enum: [
      'National',
      'Northeast',
      'Southeast',
      'Midwest',
      'Southwest',
      'West',
      'International'
    ]
  },
  investmentMin: {
    type: Number,
    required: [true, 'Please add minimum investment amount']
  },
  investmentMax: {
    type: Number,
    required: [true, 'Please add maximum investment amount']
  },
  establishedYear: Number,
  unitsCount: Number,
  franchiseFee: Number,
  ongoingRoyalty: String,
  termYears: Number,
  
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Franchise', franchiseSchema);
