import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "RiskMap", path: "/riskmap" },
    { name: "Alerts", path: "/alerts" },
    { name: "Admin", path: "/admin" },
  ];

  return (
    <nav className="navbar">
      <div className="logo">SafetyHub</div>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
