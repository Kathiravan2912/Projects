import React, { useState } from "react";
import "./loginStyle.css";
import LogoImage from '../landingPage/Homepage/images/logo.png';
import {Link} from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!username) {
      newErrors.username = "Username is required!";
    }

    if (!password) {
      newErrors.password = "Password is required!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log( username, password);
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        Name: username,
        Password:password,
      });


      if (response.status === 200) {
        // localStorage.setItem("isAuth", response.data.token);
        window.location.href = "/dashboard";
      }
    } catch (err) {
      if (err.response) {
        setErrors({
          username:
            err.response.data.message === "User not found"
              ? "User not found"
              : "",
          password:
            err.response.data.message === "Password is incorrect"
              ? "Password is incorrect"
              : "",
        });
      } else {
        console.error(err);
      }
    }
  };


  return (
    <div className="login-page">
      <div className="header-content">
        <div className="header-name">
        <img className="logo" src={LogoImage} alt="Logo" />
        <h3>X-PENSE TRACKER</h3>
        </div>
      </div>
      {/* <div className="line"><hr></hr></div> */}
      <div className="back">
      <Link to='/'>
        <button className="back-btn">🡸BACK</button>
        </Link>
      </div>
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              name ="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="new-to-this">New to this:<Link to="/signup"><p className="signup-navigate">Create Account</p></Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
