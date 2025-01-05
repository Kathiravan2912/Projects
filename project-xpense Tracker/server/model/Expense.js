import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;

// models/Expense.js
