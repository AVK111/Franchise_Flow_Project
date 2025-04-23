import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  franchise: {
    type: mongoose.Schema.ObjectId,
    ref: 'Franchise',
    required: true
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'reviewing', 'approved', 'rejected'],
    default: 'pending'
  },
  investmentAmount: {
    type: Number,
    required: [true, 'Please add investment amount']
  },
  preferredLocation: {
    type: String,
    required: [true, 'Please add preferred location']
  },
  experience: {
    type: String,
    required: [true, 'Please add your experience']
  },
  message: {
    type: String,
    required: [true, 'Please add a message']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Application = mongoose.model('Application', applicationSchema);
export default Application;
