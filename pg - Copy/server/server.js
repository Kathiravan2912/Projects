import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Import routes and controllers
import users from './controllers/userControl.js';
import expenseRoutes from './routes/expenses.js'; // Correct file name as per convention

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/auth', users); // User authentication-related routes
app.use('/api/expenses', expenseRoutes); // Expense management routes

// MongoDB Connection
mongoose
  .connect('mongodb://127.0.0.1:27017/ExpenseTracker-users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Could not connect to MongoDB:', err);
    process.exit(1);
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

