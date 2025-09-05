import React from "react";
import { AlertTriangle, MapPin, PhoneCall } from "lucide-react";
import "./Home.css";
import home from "../../assets/home.png";

// Sample data

const zones = [
  {
    id: "A",
    name: "Zone A - Mountain View",
    risk: "Low",
    recentIncidents: 2,
    lastRockfall: "2024-08-01",
    slopeType: "Gentle slope with stable rocks",
    soilCondition: "Mostly clay, low erosion risk",
    precaution: "Standard caution advised; avoid loose boulders",
    recommendedActions: [
      "Stay on marked paths",
      "Report any new cracks or rock movements",
      "Observe signage and warnings",
    ],
  },
  {
    id: "B",
    name: "Zone B - Hillside",
    risk: "Moderate",
    recentIncidents: 5,
    lastRockfall: "2024-09-15",
    slopeType: "Steep hillside with scattered rocks",
    soilCondition: "Sandy soil, prone to minor erosion",
    precaution: "Avoid hiking after heavy rain; monitor alerts",
    recommendedActions: [
      "Check local weather before entering",
      "Maintain safe distance from steep edges",
      "Report unusual vibrations or cracks",
    ],
  },
  {
    id: "C",
    name: "Zone C - Steep Slope",
    risk: "High",
    recentIncidents: 12,
    lastRockfall: "2024-09-25",
    slopeType: "Very steep slope with loose rocks",
    soilCondition: "Loose gravel, high erosion potential",
    precaution: "Evacuation advised during rainfall",
    recommendedActions: [
      "Avoid entering the zone during rain",
      "Follow evacuation instructions immediately",
      "Monitor official alerts and notifications",
    ],
  },
];

const alerts = [
  { id: 1, message: "Rockfall warning in Zone C", type: "high" },
  {
    id: 2,
    message: "Evacuation advised for Zone B residents",
    type: "moderate",
  },
];

const contacts = [
  { id: 1, name: "Emergency Services", number: "911" },
  { id: 2, name: "Local Safety Hotline", number: "1-800-SAFE" },
];

export default function Home() {
  return (
    <div className="dashboard-container">
      <h1 className="page-title">Public Safety Dashboard</h1>

      {/* MAP */}
      <div className="map-card">
        <img src={home} alt="Safety Map" />
      </div>

      {/* ZONE INFO */}
      <div className="zone-cards">
        {zones.map((zone) => (
          <div key={zone.id} className={`zone-card ${zone.risk.toLowerCase()}`}>
            <h3>
              <MapPin size={18} /> {zone.name}
            </h3>
            <p>
              <strong>Risk Level:</strong>{" "}
              <span className={`risk ${zone.risk.toLowerCase()}`}>
                {zone.risk}
              </span>
            </p>
            <p>
              <strong>Recent Rockfalls:</strong> {zone.recentIncidents}
            </p>
            <p>
              <strong>Last Rockfall:</strong> {zone.lastRockfall}
            </p>
            <p>
              <strong>Slope Type:</strong> {zone.slopeType}
            </p>
            <p>
              <strong>Soil Condition:</strong> {zone.soilCondition}
            </p>
            <p>
              <strong>Precaution:</strong> {zone.precaution}
            </p>
            <p>
              <strong>Recommended Actions:</strong>
            </p>
            <ul>
              {zone.recommendedActions.map((action, idx) => (
                <li key={idx}>{action}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* PUBLIC ALERTS */}
      <div className="alerts-section">
        <h2 className="section-title">Public Alerts</h2>
        {alerts.map((alert) => (
          <div key={alert.id} className={`alert-card ${alert.type}`}>
            <AlertTriangle size={20} /> {alert.message}
          </div>
        ))}
      </div>

      {/* SAFETY TIPS & CONTACTS */}
      <div className="tips-contacts-section">
        <div className="tips-card">
          <h2 className="section-title">Safety Tips</h2>
          <ul>
            <li>Stay away from steep slopes during heavy rain</li>
            <li>Follow marked evacuation routes</li>
            <li>Do not enter high-risk zones</li>
            <li>Report unusual activity to local authorities</li>
          </ul>
        </div>

        <div className="contacts-card">
          <h2 className="section-title">Emergency Contacts</h2>
          {contacts.map((c) => (
            <p key={c.id}>
              <PhoneCall size={16} /> {c.name}: {c.number}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
