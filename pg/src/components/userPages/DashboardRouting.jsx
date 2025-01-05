import React from 'react';
import Dashboard from "../userPages/dashboard";
import Expenses from "../userPages/Expenses";
import Categories from "../userPages/Categories";
import Profile from "../userPages/Profile";
import DataVisualization from "../userPages/DataVisualization";
import Sidebar from "../userPages/Sidebar";
import Downloads from "../userPages/Downloads";
import Contact_Support from "../userPages/Contact_Support";
import Demo_Guide from "../userPages/Demo_Guide";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';

const DashboardRouting = () => {
  return (
    <div className="app-container">
      {/* <Header/> */}
        <Sidebar />
        <div className="main-content">
          <Routes>
            {/* Sidebar Routes */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact_Support />} />
            <Route path="/demo" element={<Demo_Guide />} />
            {/* <Route path="/downloads" element={<Downloads />} /> */}
            <Route path="/visualization" element={<DataVisualization />} />
          </Routes>
        </div>
      </div>
  )
}

export default DashboardRouting