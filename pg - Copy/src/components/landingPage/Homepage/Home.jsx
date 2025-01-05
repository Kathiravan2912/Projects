import React from "react";
import "./HomeStyle.css";
import advantage1 from "./images/advantage1.jpeg";
import advantage2 from "./images/advantage2.jpeg";
import advantage3 from "./images/advantage3.jpeg";
import advantage4 from "./images/advantage4.jpeg";
import LogoImage from "./images/logo.png"
import {Link} from "react-router-dom"
import { FaFacebook, FaInstagram, FaWallet, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";

const Home = () => {
  return (
    <>
    <div className="body">
      <div className="header">
        <nav className="navbar">
          <div className="navbar-left">
            <img className="logo" src={LogoImage} alt="Logo" />
            <p className="company-name">TRACK YOUR EXPENSE</p>
          </div>
          <div className="navbar-right">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#whyus" className="nav-link">
              Why us
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <Link to='/login'>
            <button className="login-btn-nav">Login</button>
            </Link>
          </div>
        </nav>
      </div>
      <div>
        <hr></hr>
      </div>
      <div className="heading">
        <h2>XPENSE SAVER</h2>
      </div>

      <div className="about-container">
        <div className="head" id="about">ABOUT US!</div>
        <div className="about-description">
          <p>
            <span> </span>An expense tracker is a tool or application designed
            to help individuals or businesses monitor and manage their financial
            expenditures. It allows users to log expenses, categorize them (such
            as food, transport, utilities), and track their spending over time.
            The tracker can provide insights through charts or reports, helping
            users identify spending patterns, set budgets, and achieve financial
            goals. Advanced versions may include features like linking bank
            accounts, generating alerts for overspending, and managing income
            alongside expenses. Expense trackers are valuable for maintaining
            financial discipline and ensuring better control over personal or
            business finances.
          </p>
        </div>
      </div>
      <div className="line">
        <hr></hr>
      </div>
      <div className="advantages-container">
        <div className="head" id="whyus">WHY US?</div>

        <div className="advantages-grid-odd">
          <div className="advantage-image-odd">
            <img src={advantage1} alt="" />
          </div>
          <div className="advantage-point-odd">
              <p className="advantage-point-topic">Take Control of Your Finances</p>
              <p>
            Gain clarity and control over your spending habits with easy-to-use tools for tracking and managing expenses.
            </p>
          </div>
        </div>

        <div className="advantages-grid-even">
          <div className="advantage-point-even">
              <p className="advantage-point-topic">Smarter Spending with Insights</p>
              <p>
              Visual reports and categorized insights help you make informed financial decisions and identify saving opportunities.
            </p>
          </div>
          <div className="advantage-image-even">
            <img src={advantage2} alt="" />
          </div>
        </div>

        <div className="advantages-grid-odd">
          <div className="advantage-image-odd">
            <img src={advantage3} alt="" />
          </div>
          <div className="advantage-point-odd">
              <p className="advantage-point-topic">Safe and Secure Data Storage</p>
              <p>
              Your financial information is securely stored with advanced encryption, ensuring only you have access.
            </p>
          </div>
        </div>

        <div className="advantages-grid-even">
          <div className="advantage-point-even">
              <p className="advantage-point-topic">Access Anytime, Anywhere</p>
              <p>
              Stay connected to your financial goals on any device, whether you're at home or on the go.
            </p>
          </div>
          <div className="advantage-image-even">
            <img src={advantage4} alt="" />
          </div>
        </div>
      </div>

      <div className="steps-container">
        <div className="head">STEPS TO SETUP YOUR TRACKER</div>
        <div className="steps">
          <div className="down-arrow">{/* <img src={arrow} alt="" /> */}</div>
          <div className="step">
            <p>STEP 1: Create an Account by clicking Signup in top Corner.</p>
          </div>
          <div className="step">
            <p>STEP 2: After signup and registration, login to your Dashboard.</p>
          </div>
          <div className="step">
            <p>STEP 3: Create your Budget for respective months.</p>
          </div>
          <div className="step">
            <p>STEP 4: Save the expenses and track your expenses.</p>
          </div>
        </div>
      </div>

      <div className="line">
        <hr></hr>
      </div>

      <div className="contact-container">
        <div className="head">
          <p id="contact">CONTACT</p>
        </div>
        <div className="contact-grid">
          <div className="contact-left">
            <img src={advantage1} alt="" />
            <p>
              No.23,End Street, T.Nagar,<br></br> Chennai-28.
            </p>
          </div>
          <div className="contact-data">
            <input type="text" placeholder="Your Name..." />
            <input type="email" placeholder="Your Email..." />
            <input type="text" placeholder="Message..." />
            <button className="send-btn">Send Messsage</button>
          </div>
          <div className="contact-right">
            <FaWhatsapp size={50} className="icons" color="#fff200" />
            <FaFacebook size={50} className="icons"  color="#fff200" />
            <FaGlobe size={50} className="icons"  color="#fff200" />
            <FaInstagram size={50} className="icons"  color="#fff200" />
            <FaYoutube size={50} className="icons"  color="#fff200" />
          </div>
        </div>
      </div>

      <div className="footer">
        <p>Copyright@2024 - All rights Reserved</p>
      </div>
    </div>
    </>
  );
};

export default Home;
