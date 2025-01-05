// models/Budget.js
import mongoose from 'mongoose';

const budgetSchema = new mongoose.Schema({
  totalAmount: { type: Number, required: true },
  month: { type: String, required: true },
  year: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Associate budget with the user
});

const Budget = mongoose.model('Budget', budgetSchema);

export default Budget;
