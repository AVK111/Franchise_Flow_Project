import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import errorHandler from './middleware/error.js';

//environment variables
dotenv.config({ path: './config/config.env' });

//database
connectDB();

// Route files
import auth from './routes/auth.js';
import users from './routes/users.js';
import franchises from './routes/franchises.js';
import applications from './routes/applications.js';

const app = express();

//Body parser
app.use(express.json());

//CORS
app.use(cors());

//routers
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);
app.use('/api/v1/franchises', franchises);
app.use('/api/v1/applications', applications);

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => 
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
