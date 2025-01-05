import React, { useState } from "react";
import "./Contact_Support.css";

const Contact_Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    problem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", problem: "" });
  };

  return (
    <div className="contact-support-container">
      <div className="company-info">
        <h2>About Us</h2>
        <p>
          Welcome to our support page! We are a passionate team of developers
          committed to creating innovative solutions for your needs.
        </p>
        <p>
          <strong>Company:</strong> Tech Innovations Inc.
        </p>
        <p>
          <strong>Contact:</strong> support@techinnovations.com
        </p>
        <p>
          <strong>Address:</strong> 1234 Innovation Drive, Tech City, 56789
        </p>
      </div>

      <div className="message-form">
        <h2>Contact Support</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>
          <label>
            Problem Description:
            <textarea
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              placeholder="Describe your problem"
              required
            ></textarea>
          </label>
          <button type="submit" className="send-button">
            Send Email
          </button>
        </form>
        <div className="contact-options">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            Contact via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact_Support;
