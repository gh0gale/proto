import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Admin from "./components/Admin/Admin.jsx";
import Alerts from "./components/Alerts/Alerts.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import RiskMap from "./components/RiskMap/RiskMap.jsx";
import Home from "./components/Home/Home.jsx";



export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Home/>} />
          <Route path="/riskmap" element={<RiskMap />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}
