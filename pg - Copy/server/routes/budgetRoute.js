// routes/budgetRoutes.js
import express from 'express';
import { addBudget, getBudgetForMonth, getExpensesForMonth } from '../controllers/budgetController.js';

const router = express.Router();

router.post('/', addBudget);
router.get('/', getBudgetForMonth);
router.get('/expenses', getExpensesForMonth);  // New route for fetching expenses

export default router;
