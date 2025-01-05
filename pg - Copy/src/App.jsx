// import Home from './components/landingPage/Homepage/Home';
// import Login from './components/login/LoginPage';
// import SignupPage from './components/signup/SignupPage';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';

// import Dashboard from './components/userPages/dashborad';

// function App() {

//   <BrowserRouter>
//   <Routes>
//     <Route path='/login' element={Login}></Route>
//   </Routes>
//   </BrowserRouter>

//   return(
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Home/>}></Route>
//       <Route path='/login' element={<Login/>}></Route>
//       <Route path='/signup' element={<SignupPage/>}></Route>
//       <Route path='/dashboard' element={<Dashboard/>}></Route>
//     </Routes>
//     </BrowserRouter>
//   )
//   }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/landingPage/Homepage/Home";
import Login from "./components/login/LoginPage";
import SignupPage from "./components/signup/SignupPage";
import DashboardRouting from "./components/userPages/DashboardRouting";
// import Dashboard from "./components/userPages/dashboard";
// import Expenses from "./components/userPages/Expenses";
// import Categories from "./components/userPages/Categories";
// import Profile from "./components/userPages/Profile";
// import DataVisualization from "./components/userPages/DataVisualization";
// import Sidebar from "./components/userPages/Sidebar";
// import Downloads from "./components/userPages/Downloads";
// import Contact_Support from "./components/userPages/Contact_Support";
// import Demo_Guide from "./components/userPages/Demo_Guide";
import "./App.css";
import Header from "./components/userPages/Header";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard/*" element={<DashboardRouting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
