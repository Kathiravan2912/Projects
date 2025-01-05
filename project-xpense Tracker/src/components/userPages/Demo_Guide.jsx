import React from "react";
import "./Demo_Guide.css";

const Demo_Guide = () => {
  return (
    <div className="demo-guide-container">
      <header className="guide-header">
        <h1>Expense Tracker - Demo Guide</h1>
        <p>Master the art of managing your expenses with our step-by-step guide!</p>
      </header>

      <section className="guide-section">
        <h2>Step-by-Step Process</h2>
        <ol className="steps-list">
          <li>
            <h3>Step 1: Dashboard Overview</h3>
            <p>
              Get an overview of your total budget, expenses, and remaining balance. Navigate to the dashboard to view a quick summary of your financial status.
            </p>
            <video
              src="demo-dashboard.mp4"
              controls
              className="demo-video"
            ></video>
          </li>
          <li>
            <h3>Step 2: Adding a New Expense</h3>
            <p>
              Click on the "Add Expense" button to record a new expense. Enter the expense details like name, amount, and category to keep track of your spending.
            </p>
            <video
              src="demo-add-expense.mp4"
              controls
              className="demo-video"
            ></video>
          </li>
          <li>
            <h3>Step 3: Viewing Expense History</h3>
            <p>
              Go to the history section to view a detailed breakdown of all your expenses. Use filters to sort by date, category, or amount.
            </p>
            <video
              src="demo-expense-history.mp4"
              controls
              className="demo-video"
            ></video>
          </li>
          <li>
            <h3>Step 4: Editing an Expense</h3>
            <p>
              Made a mistake? No problem! Select an expense from the history and click "Edit" to update the details.
            </p>
            <video
              src="demo-edit-expense.mp4"
              controls
              className="demo-video"
            ></video>
          </li>
          <li>
            <h3>Step 5: Deleting an Expense</h3>
            <p>
              To remove an expense, click the delete icon next to the entry in the history section. Confirm the deletion, and it will be removed.
            </p>
            <video
              src="demo-delete-expense.mp4"
              controls
              className="demo-video"
            ></video>
          </li>
        </ol>
      </section>

      <section className="tips-section">
        <h2>Pro Tips</h2>
        <ul>
          <li>Set a monthly budget to ensure you don't overspend.</li>
          <li>Review your expenses regularly to identify unnecessary spending.</li>
          <li>Use filters and categories for better organization.</li>
          <li>Backup your data frequently to avoid accidental loss.</li>
        </ul>
      </section>

      <footer className="guide-footer">
        <p>Need further assistance? Contact our support team at <a href="mailto:support@expensetracker.com">support@expensetracker.com</a>.</p>
      </footer>
    </div>
  );
};

export default Demo_Guide;
