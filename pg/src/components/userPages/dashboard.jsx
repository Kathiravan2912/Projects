import React, { useState } from "react";
import "./Dashboard.css"; // Import the CSS file for styling

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [totalBudget, setTotalBudget] = useState(0);
  const [amountSpent, setAmountSpent] = useState(0);
  const [month, setMonth] = useState("");

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const handleSaveBudget = () => {
    // Placeholder for saving budget logic
    setShowForm(false);
    setAmountSpent(0); // Reset amount spent on new budget
  };

  return (
    <div className="dashboard-container">
      <button className="new-budget-button" onClick={handleOpenForm}>
        New Budget
      </button>

      {month && (
        <div className="selected-month">
          <strong>Month:</strong> {month}
        </div>
      )}

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseForm}>
              &times;
            </button>
            <h2 className="form-title">Set New Budget</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveBudget();
              }}
            >
              <label>
                Total Amount:
                <input
                className="form-amount"
                  type="number"
                  value={totalBudget}
                  onChange={(e) => setTotalBudget(Number(e.target.value))}
                  required
                />
              </label>
              <label>
                Select Month:
                <select
                className="form-month"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  required
                >
                  <option value="">--Select--</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </label>
              <button type="submit" className="save-budget-button">
                Save Budget
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="budget-info">
        <div className="info-card">
          <h3>Total Budget</h3>
          <p>Rs.{totalBudget}</p>
        </div>
        <div className="info-card">
          <h3>Amount Spent</h3>
          <p>Rs.{amountSpent}</p>
        </div>
        <div className="info-card">
          <h3>Remaining Amount</h3>
          <p>Rs.{totalBudget - amountSpent}</p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum ad quod
       laboriosam magnam. Minima autem modi non esse quam magnam consequuntur at! Pariatur
        non sint quo, expedita quasi doloribus?
    </div>
  );
};

export default Dashboard;
