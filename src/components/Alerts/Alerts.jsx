import React, { useState } from "react";
import { AlertTriangle, Camera } from "lucide-react";
import "../Alerts/Alerts.css";

export default function Alerts() {
  const [tab, setTab] = useState("recent");

  const alerts = [
    {
      id: "AL-101",
      title: "Road Closure: Mountain Pass",
      description: "Road closed due to landslide risk. Evacuation routes active.",
      zone: "Zone B",
      time: "2025-09-05 09:00",
      level: "high",
      category: "Road Closure",
    },
    {
      id: "AL-102",
      title: "Heavy Rain Advisory",
      description: "Continuous heavy rain expected for the next 12 hours.",
      zone: "Region North",
      time: "2025-09-05 07:30",
      level: "medium",
      category: "Weather",
    },
    {
      id: "AL-103",
      title: "Minor Rockfall Alert",
      description: "Small rocks observed near trail entrance. Caution advised.",
      zone: "Zone C",
      time: "2025-09-04 16:20",
      level: "low",
      category: "Rockfall",
    },
    {
      id: "AL-104",
      title: "Bridge Inspection Required",
      description: "Potential structural issues detected. Engineering team alerted.",
      zone: "Zone A",
      time: "2025-09-05 08:15",
      level: "medium",
      category: "Infrastructure",
    },
    {
      id: "AL-105",
      title: "River Overflow Warning",
      description: "River levels rising due to heavy rainfall. Monitor local areas.",
      zone: "Region East",
      time: "2025-09-05 06:50",
      level: "high",
      category: "Flood",
    },
    {
      id: "AL-106",
      title: "Landslide Risk Alert",
      description: "Slope instability detected after recent storms. Avoid Zone D.",
      zone: "Zone D",
      time: "2025-09-04 18:40",
      level: "high",
      category: "Landslide",
    },
    {
      id: "AL-107",
      title: "Trail Closure: Rocky Path",
      description: "Trail closed due to fallen rocks and debris. Safety team notified.",
      zone: "Zone E",
      time: "2025-09-04 12:30",
      level: "medium",
      category: "Trail Closure",
    },
    {
      id: "AL-108",
      title: "Storm Advisory",
      description: "Strong winds and thunderstorms expected in coastal regions.",
      zone: "Region South",
      time: "2025-09-05 05:20",
      level: "medium",
      category: "Weather",
    },
    {
      id: "AL-109",
      title: "Evacuation Alert: Hillside Residential Area",
      description: "Residents advised to evacuate due to high rockfall risk.",
      zone: "Zone F",
      time: "2025-09-05 09:45",
      level: "high",
      category: "Evacuation",
    },
  ];

  const reports = [
    { name: "Soil Stability Report – Hillside Region", link: "#" },
    { name: "Rockfall & Debris Risk Analysis – Mountain Sectors", link: "#" },
    { name: "Evacuation & Traffic Reroute Guidelines", link: "#" },
  ];

  // Sort alerts by time descending
  const sortedAlerts = [...alerts].sort(
    (a, b) => new Date(b.time) - new Date(a.time)
  );

  // Recent: latest 6 alerts
  const recentAlerts = sortedAlerts.slice(0, 6);

  // Past: remaining older alerts
  const pastAlerts = sortedAlerts.slice(6);

  const severityCount = {
    high: alerts.filter(a => a.level === "high").length,
    medium: alerts.filter(a => a.level === "medium").length,
    low: alerts.filter(a => a.level === "low").length,
  };

  return (
    <div className="alerts-premium-container">
      {/* TOP ALERT BANNER */}
      <div className="top-alert">
        <AlertTriangle size={24} /> 
        <span>High-risk alerts active! Stay updated for safety information.</span>
      </div>

      {/* SEVERITY STATISTICS */}
      <div className="severity-stats">
        <div className="stat-card high">
          <h3>High</h3>
          <p>{severityCount.high} alerts</p>
        </div>
        <div className="stat-card medium">
          <h3>Medium</h3>
          <p>{severityCount.medium} alerts</p>
        </div>
        <div className="stat-card low">
          <h3>Low</h3>
          <p>{severityCount.low} alerts</p>
        </div>
      </div>

      {/* TAB BUTTONS */}
      <div className="alerts-tabs">
        <button
          className={tab === "recent" ? "tab active" : "tab"}
          onClick={() => setTab("recent")}
        >
          Recent Alerts
        </button>
        <button
          className={tab === "past" ? "tab active" : "tab"}
          onClick={() => setTab("past")}
        >
          Past Alerts
        </button>
      </div>

      {/* MAIN GRID */}
      <div className="main-grid">
        <div className="left-column">
          {(tab === "recent" ? recentAlerts : pastAlerts).map(alert => (
            <div key={alert.id} className={`alert-card ${alert.level}`}>
              <h3>
                <AlertTriangle size={18} /> {alert.title}
              </h3>
              <p className="meta">{alert.id} • {alert.zone} • {alert.category}</p>
              <p>{alert.description}</p>
              <p className="meta">Issued: {alert.time}</p>
            </div>
          ))}
        </div>

        <div className="right-column">
          <section className="content-card">
            <h2 className="section-title">Technical Reports</h2>
            <ul className="report-list">
              {reports.map((r,i) => (
                <li key={i}><a href={r.link} target="_blank">{r.name}</a></li>
              ))}
            </ul>
          </section>

          <section className="content-card">
            <h2 className="section-title">Notifications</h2>
            <ul>
              <li>Evacuation alerts via SMS / Push</li>
              <li>Road closures and traffic reroutes</li>
              <li>Technical updates for management & emergency teams</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
