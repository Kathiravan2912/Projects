// controllers/expenseController.js
import Expense from '../model/Expense.js';

export const addExpense = async (req, res) => {
  try {
    const { name, amount, date, time, category, userId, month, year } = req.body;
    const newExpense = new Expense({ name, amount, date, time, category, userId, month, year });
    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (err) {
    res.status(500).json({ message: 'Error adding expense', error: err.message });
  }
};

export const getExpensesForMonth = async (req, res) => {
  try {
    const { userId, month, year } = req.query;
    const expenses = await Expense.find({ userId, month, year });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching expenses', error: err.message });
  }
};
