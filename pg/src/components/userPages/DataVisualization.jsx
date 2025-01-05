import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "./DataVisualization.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const DataVisualization = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState(2023);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const years = [2021, 2022, 2023, 2024];

  const categoryData = {
    categories: ["Food", "Transport", "Rent", "Entertainment", "Miscellaneous"],
    amounts: [200, 150, 500, 100, 50],
  };

  const yearlyData = {
    months: months,
    totals: [1200, 900, 1500, 1100, 1300, 1400, 1600, 1500, 1200, 1100, 1000, 900],
  };

  const handleMonthChange = (e) => setSelectedMonth(e.target.value);
  const handleYearChange = (e) => setSelectedYear(e.target.value);

  return (
    <div className="data-visualization-container">
      {/* Monthly Chart */}
      <section className="chart-section">
        <h2>Monthly Expense Chart</h2>
        <div className="selector">
          <label htmlFor="month-select">Select Month:</label>
          <select
            id="month-select"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <Bar
          data={{
            labels: categoryData.categories,
            datasets: [
              {
                label: `Expenses in ${selectedMonth}`,
                data: categoryData.amounts,
                backgroundColor: "#fff200",
                borderColor: "darkblue",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            scales: {
              x: { title: { display: true, text: "Categories" } },
              y: { title: { display: true, text: "Amount" } },
            },
          }}
        />
      </section>

      {/* Yearly Chart */}
      <section className="chart-section">
        <h2>Yearly Expense Chart</h2>
        <div className="selector">
          <label htmlFor="year-select">Select Year:</label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={handleYearChange}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <Bar
          data={{
            labels: yearlyData.months,
            datasets: [
              {
                label: `Expenses in ${selectedYear}`,
                data: yearlyData.totals,
                backgroundColor: "darkblue",
                borderColor: "#fff200",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            scales: {
              x: { title: { display: true, text: "Months" } },
              y: { title: { display: true, text: "Amount" } },
            },
          }}
        />
      </section>
    </div>
  );
};

export default DataVisualization;
