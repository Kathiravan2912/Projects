import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Expenses.css";
import { FaCloudUploadAlt, FaDumpster, FaEdge, FaEdit, FaRegEdit, FaUserEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

const Expenses = () => {
  const [showForm, setShowForm] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseDate, setExpenseDate] = useState(""); // Default date will be set here
  const [expenseTime, setExpenseTime] = useState(""); // Default time will be set here
  const [filterStartDate, setFilterStartDate] = useState("");
  const [filterEndDate, setFilterEndDate] = useState("");
  const [editExpense, setEditExpense] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [expenseToDelete, setExpenseToDelete] = useState(null);

  // Fetch expenses from backend
  const fetchExpenses = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/expenses");
      setExpenses(data);
    } catch (err) {
      console.error("Error fetching expenses:", err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleOpenForm = (expense = null) => {
    if (expense) {
      setEditExpense(expense);
      setExpenseName(expense.name);
      setExpenseAmount(expense.amount);
      setExpenseCategory(expense.category);
      setExpenseDate(new Date(expense.date).toISOString().split("T")[0]);
      setExpenseTime(new Date(expense.date).toLocaleTimeString());
    } else {
      // Set default date and time if it's a new expense
      const currentDate = new Date();
      setExpenseDate(currentDate.toISOString().split("T")[0]); // Default current date
      setExpenseTime(currentDate.toLocaleTimeString()); // Default current time
    }
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditExpense(null);
    setExpenseName("");
    setExpenseAmount("");
    setExpenseCategory("");
    setExpenseDate("");
    setExpenseTime("");
  };

  const handleSaveExpense = async () => {
    const newExpense = {
      name: expenseName,
      amount: Number(expenseAmount),
      category: expenseCategory,
      date: new Date(`${expenseDate}T${expenseTime}`), // Combine date and time
    };

    try {
      if (editExpense) {
        await axios.put(
          `http://localhost:3000/api/expenses/${editExpense._id}`,
          newExpense
        );
      } else {
        await axios.post("http://localhost:3000/api/expenses", newExpense);
      }
      fetchExpenses();
      handleCloseForm();
    } catch (err) {
      console.error("Error saving expense:", err);
    }
  };

  const handleDeleteExpense = async () => {
    try {
      await axios.delete(
        `http://localhost:3000/api/expenses/${expenseToDelete._id}`
      );
      fetchExpenses();
      setShowDeleteConfirmation(false);
    } catch (err) {
      console.error("Error deleting expense:", err);
    }
  };

  const handleOpenDeleteConfirmation = (expense) => {
    setExpenseToDelete(expense);
    setShowDeleteConfirmation(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setShowDeleteConfirmation(false);
    setExpenseToDelete(null);
  };

  const filteredExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date).toISOString().split("T")[0];
    return (
      (!filterStartDate || expenseDate >= filterStartDate) &&
      (!filterEndDate || expenseDate <= filterEndDate)
    );
  });

  const totalExpenses = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="expenses-container">
      <h2>Total Expenses: Rs.{totalExpenses}</h2>

      <div className="filter-section">
        <label>
          Start Date:
          <input
            type="date"
            value={filterStartDate}
            onChange={(e) => setFilterStartDate(e.target.value)}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={filterEndDate}
            onChange={(e) => setFilterEndDate(e.target.value)}
          />
        </label>
      </div>

      <button className="add-expense-button" onClick={() => handleOpenForm()}>
        Add Expense
      </button>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button-expense" onClick={handleCloseForm}>
              &times;
            </button>
            <h2 className="form-title">{editExpense ? "Edit" : "Add"} Expense</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveExpense();
              }}
            >
              <label>
                Name of Expense:
                <input
                  className="expense-name"
                  type="text"
                  value={expenseName}
                  onChange={(e) => setExpenseName(e.target.value)}
                  required
                />
              </label>
              <label>
                Amount:
                <input
                  className="expense-amount"
                  type="number"
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                  required
                />
              </label>
              <label>
                Category:
                <select
                  value={expenseCategory}
                  className="expense-category"
                  onChange={(e) => setExpenseCategory(e.target.value)}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Rent">Rent</option>
                  <option value="Food">Food</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Transport">Transport</option>
                  <option value="Entertainment">Entertainment</option>
                </select>
              </label>
              <label>
                Date:
                <input
                  type="date"
                  value={expenseDate}
                  onChange={(e) => setExpenseDate(e.target.value)}
                />
              </label>
              <label>
                Time:
                <input
                  type="time"
                  value={expenseTime}
                  onChange={(e) => setExpenseTime(e.target.value)}
                />
              </label>
              <button type="submit" className="save-expense-button">
                Save
              </button>
            </form>
          </div>
        </div>
      )}

      {showDeleteConfirmation && (
        <div className="confirmation-overlay">
          <div className="confirmation-dialog">
            <h3>Confirmation!</h3>
            <hr />
            <h3 className="confirmation-topic">Are you sure you want to delete this expense record?</h3>
            <div className="confirmation-buttons">
              <button onClick={handleDeleteExpense} className="confirm-delete-button">
                Yes
              </button>
              <button
                onClick={handleCloseDeleteConfirmation}
                className="cancel-delete-button"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      <table className="expenses-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense) => (
            <tr key={expense._id}>
              <td>{expense.name}</td>
              <td>{new Date(expense.date).toLocaleDateString()}</td>
              <td>{new Date(expense.date).toLocaleTimeString()}</td>
              <td>Rs.{expense.amount.toFixed(2)}</td>
              <td>{expense.category}</td>
              <td>
                {/* <button className="expense-edit-btn" onClick={() => handleOpenForm(expense)}><FaUserEdit/></button> */}
                <button className="expense-delete-btn" onClick={() => handleOpenDeleteConfirmation(expense)}>
                  <FaTrashCan/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Expenses;
