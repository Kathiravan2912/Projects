import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {FaThLarge, FaTags, FaUserCircle, FaChartBar, FaHandsHelping, FaSignOutAlt, FaFileArchive,FaArrowLeft, FaArrowRight, FaArrowCircleUp } from "react-icons/fa";
import "./Sidebar.css";
import {FaMoneyBill1,FaWandSparkles } from "react-icons/fa6";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const isActive = (path) => location.pathname === path;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    localStorage.setItem("isAuth", "");
    window.location.href = "/login";
  };

  return (
    <>
    <div className="upside" href="#up"><FaArrowCircleUp/></div>
    <div className="body">
    <div className={`sidebar ${isOpen ? "open" : "closed"}`} id="up">
      <div className="toggle-button" onClick={toggleSidebar}>
      {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </div>
      <ul>
        <Link to="/dashboard" className="text-decoration-none">
          <li className={`option ${isActive("/dashboard") ? "active" : ""}`}>
            <FaThLarge className="icon" />
            {isOpen && <span>Dashboard</span>}
          </li>
        </Link>
        <Link to="/dashboard/expenses" className="text-decoration-none">
          <li className={`option ${isActive("/dashboard/expenses") ? "active" : ""}`}>
            <FaMoneyBill1 className="icon" />
            {isOpen && <span>Expenses</span>}
          </li>
        </Link>
        <Link to="/dashboard/categories" className="text-decoration-none">
          <li className={`option ${isActive("/dashboard/categories") ? "active" : ""}`}>
            <FaTags className="icon" />
            {isOpen && <span>Categories</span>}
          </li>
        </Link>
        <Link to="/dashboard/profile" className="text-decoration-none">
          <li className={`option ${isActive("/dashboard/profile") ? "active" : ""}`}>
            <FaUserCircle className="icon" />
            {isOpen && <span>Profile</span>}
          </li>
        </Link>
        <Link to="/dashboard/visualization" className="text-decoration-none">
          <li className={`option ${isActive("/dashboard/visualization") ? "active" : ""}`}>
            <FaChartBar className="icon" />
            {isOpen && <span>Data Visualization</span>}
          </li>
        </Link>
        {/* <Link to="/dashboard/downloads" className="text-decoration-none">
          <li className={`option ${isActive("/downloads") ? "active" : ""}`}>
            <FaFileArchive className="icon" />
            {isOpen && <span>Downloads</span>}
          </li>
        </Link> */}
        <Link to="/dashboard/contact" className="text-decoration-none">
          <li className={`option ${isActive("/dashboard/contact") ? "active" : ""}`}>
            <FaHandsHelping className="icon" />
            {isOpen && <span>Contact&Support</span>}
          </li>
        </Link>
        <Link to="/dashboard/demo" className="text-decoration-none">
          <li className={`option ${isActive("/dashboard/demo") ? "active" : ""}`}>
            <FaWandSparkles className="icon" />
            {isOpen && <span>Demo & Guide</span>}
          </li>
        </Link>
        <Link to="/" className="text-decoration-none">
          <li className={`option ${isActive("/") ? "active" : ""}`}>
            <FaSignOutAlt className="icon" />
            {isOpen && <span onClick={logout}>Logout</span>}
          </li>
        </Link>
        {/* <Link to="/" className="text-decoration-none">
          <li className={`option ${isActive("/visualization") ? "active" : ""}`}>
            <FaTrophy className="icon" />
            {isOpen && <span>Home Page</span>}
          </li>
        </Link> */}
      </ul>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
