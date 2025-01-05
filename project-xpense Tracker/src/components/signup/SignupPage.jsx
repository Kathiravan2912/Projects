import React, { useState,useEffect } from 'react';
import './SignupStyle.css';
import axios from "axios";
import LogoImage from '../landingPage/Homepage/images/logo.png';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [salary, setSalary] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  // const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    salary:"",
    mobile:"",
    address:"",
  });

  const [users, setUsers] = useState([]);
  // const navigate = useNavigate();
  
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
    // const validatePassword = (password) => password.trim().length > 0;
    const validateSalary = (salary) => /^[0-9]+(\.[0-9]{1,2})?$/.test(salary);
    const validateMobile = (mobile) => /^[6-9][0-9]{9}$/.test(mobile);
    const validateAddress = (address) => address.trim().length > 0;

  const validatePasswordMatch = (password, confirmPassword) =>
    password === confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formValid = true;
    const newError = { username: "", email: "", password: "", confirmPassword: "" ,salary:"", mobile:"", address:""};

    if (!username.trim()) {
      formValid = false;
      newError.username = "Username is required";
    }

    if (!email || !validateEmail(email)) {
      formValid = false;
      if (!email) {
        newError.email = "Email is required";
      } else {
        newError.email = "Invalid email format";
      }
    }

    if (!validatePassword(password)) {
      formValid = false;
      newError.password =
        "Password must be at least 8 characters long, include uppercase, lowercase, numbers, and special symbols";
    }

    if (!validatePasswordMatch(password, confirmPassword)) {
      formValid = false;
      newError.confirmPassword = "Passwords do not match";
    }
    if (!validateSalary(salary)) {
      formValid = false;
      newError.salary = "salary required";
    }
    if (!validateMobile(mobile)) {
      formValid = false;
      newError.mobile = "Mobile number required";
    }
    if (!validateAddress(address)) {
      formValid = false;
      newError.address = "Address required";
    }

    if (formValid) {
      try {
        await axios.post("http://localhost:3000/auth/signup", {
          Name: username,
          Email: email,
          Password: password,
          Salary: salary,
          Mobile: mobile,
          Address: address
        });

      // setUsername('');
      // setEmail('');
      // setPassword('');
      // setConfirmPassword('');
      // setSalary('');
      // setMobile('');
      // setAddress('');
      window.location.reload();
        window.alert("User added sucessfully..!")
        navigate("/");
      } catch (err) {
        console.error("Error during signup:", err);
      }
    } else {
      setError(newError);
    }
  };

  return (
    <div className="body">
      <div className="header-content">
        <div className="header-name">
        <img className="logo" src={LogoImage} alt="Logo" />
        <h3>X-PENSE TRACKER</h3>
        </div>
      </div>
      <div className="back">
        <Link to="/login">
        <button className="back-btn">🡸BACK</button></Link>
      </div>
    <div className="register-bg">
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="input-group">
              {/* <label>Username</label> */}
              <input
                type="text"
                placeholder="Username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={error.username ? 'error-input' : ''}
              />
              {error.username && <p className="error">{error.username}</p>}
            </div>

            <div className="input-group">
              {/* <label>Email</label> */}
              <input
                type="email"
                placeholder="Email"
                autoComplete='off'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={error.email ? 'error-input' : ''}
              />
              {error.email && <p className="error">{error.email}</p>}
            </div>

            <div className="input-group">
              {/* <label>Password</label> */}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={error.password ? 'error-input' : ''}
              />
              {error.password && <p className="error">{error.password}</p>}
            </div>

            <div className="input-group">
              {/* <label>Confirm Password</label> */}
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={error.confirmPassword ? 'error-input' : ''}
              />
              {error.confirmPassword && (
              <p className="error">{error.confirmPassword}</p>)}
            </div>

            <div className="input-group">
              {/* <label>Salary</label> */}
              <input
                type="text"
                placeholder="Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className={error.salary ? 'error-input' : ''}
              />
              {error.salary && <p className="error">{error.salary}</p>}
            </div>

            <div className="input-group">
              {/* <label>Mobile Number</label> */}
              <input
                type="text"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className={error.mobile ? 'error-input' : ''}
              />
              {error.mobile && <p className="error">{error.mobile}</p>}
            </div>

            <div className="input-group">
              {/* <label>Address</label> */}
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={error.address ? 'error-input' : ''}
              />
              {error.address && <p className="error">{error.address}</p>}
            </div>
          </div>

          <button className='register-button' type="submit">Register</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignupPage;
