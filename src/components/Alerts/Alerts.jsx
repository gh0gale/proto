import React, { useState } from "react";
import { AlertTriangle, MapPin, Activity, Camera } from "lucide-react";
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
      attachments: 2,
    },
    {
      id: "AL-102",
      title: "Heavy Rain Advisory",
      description: "Continuous heavy rain expected for the next 12 hours.",
      zone: "Region North",
      time: "2025-09-05 07:30",
      level: "medium",
      category: "Weather",
      attachments: 0,
    },
    {
      id: "AL-103",
      title: "Minor Rockfall Alert",
      description: "Small rocks observed near trail entrance. Caution advised.",
      zone: "Zone C",
      time: "2025-09-04 16:20",
      level: "low",
      category: "Rockfall",
      attachments: 1,
    },
  ];

  const reports = [
    { name: "Soil Stability Report – Hillside Region", link: "#" },
    { name: "Rockfall & Debris Risk Analysis – Mountain Sectors", link: "#" },
    { name: "Evacuation & Traffic Reroute Guidelines", link: "#" },
  ];

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
        <button className={tab === "recent" ? "tab active" : "tab"} onClick={() => setTab("recent")}>
          Recent Alerts
        </button>
        <button className={tab === "past" ? "tab active" : "tab"} onClick={() => setTab("past")}>
          Past Alerts
        </button>
      </div>

      {/* MAIN GRID */}
      <div className="main-grid">
        <div className="left-column">
          {alerts.map(alert => (
            (tab === "recent" ? alert.level !== "low" : alert.level === "low") && (
              <div key={alert.id} className={`alert-card ${alert.level}`}>
                <h3>
                  <AlertTriangle size={18} /> {alert.title}
                </h3>
                <p className="meta">{alert.id} • {alert.zone} • {alert.category}</p>
                <p>{alert.description}</p>
                <p className="meta">Issued: {alert.time}</p>
                <div className="tags">
                  <span className={`tag ${alert.level}`}>{alert.level.toUpperCase()}</span>
                  {alert.attachments > 0 && <span className="tag attachments"><Camera size={12}/> {alert.attachments} attachments</span>}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="right-column">
          <section className="content-card">
            <h2 className="section-title">Technical Reports</h2>
            <ul className="report-list">
              {reports.map((r,i) => <li key={i}><a href={r.link} target="_blank">{r.name}</a></li>)}
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
