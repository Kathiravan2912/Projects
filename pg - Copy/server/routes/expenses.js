// routes/expenseRoutes.js
import express from 'express';
import { addExpense, getExpensesForMonth } from '../controllers/expenseController.js';

const router = express.Router();

router.post('/', addExpense); // POST route for adding expenses
router.get('/', getExpensesForMonth); // GET route for fetching expenses

export default router;
