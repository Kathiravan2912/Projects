// controllers/budgetController.js
import Budget from '../model/Budget.js';
import Expense from '../model/Expense.js'; // Import Expense model

export const addBudget = async (req, res) => {
  try {
    const { totalAmount, month, year, userId } = req.body;
    const newBudget = new Budget({ totalAmount, month, year, userId });
    const savedBudget = await newBudget.save();
    res.status(201).json(savedBudget);
  } catch (err) {
    res.status(500).json({ message: 'Error adding budget', error: err.message });
  }
};

export const getBudgetForMonth = async (req, res) => {
  try {
    const { userId, month, year } = req.query;
    const budget = await Budget.findOne({ userId, month, year });
    if (!budget) return res.status(404).json({ message: 'Budget not found for the given month and year' });
    res.status(200).json(budget);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching budget', error: err.message });
  }
};

// Fetch expenses for a particular user, month, and year
export const getExpensesForMonth = async (req, res) => {
  try {
    const { userId, month, year } = req.query;
    const expenses = await Expense.find({ userId, month, year });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching expenses', error: err.message });
  }
};
