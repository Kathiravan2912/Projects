import React, { useState } from "react";
import axios from "axios";

const DynamicTableForm = () => {
  const [formData, setFormData] = useState({
    tableName: "",
    username: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.tableName || !formData.username || !formData.number) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/createTable", formData);
      alert(response.data.message);
      setFormData({ tableName: "", username: "", number: "" });
    } catch (error) {
      console.error("Error creating table:", error);
      alert("Failed to create table. Please try again.");
    }
  };

  return (
    <div>
      <h1>Create Dynamic Table</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Table Name:</label>
          <input
            type="text"
            name="tableName"
            value={formData.tableName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Number:</label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Table</button>
      </form>
    </div>
  );
};

export default DynamicTableForm;
