import React, { useState } from "react";
import { AlertTriangle, Thermometer, CloudRain, MapPin } from "lucide-react";
import "./RiskMap.css";
import risk from "../../assets/risk.png";

// Sample data
const zones = [
  {
    id: "A",
    name: "Zone A - Mountain View",
    risk: "Low",
    rainfall: 20,
    temp: 22,
  },
  {
    id: "B",
    name: "Zone B - Hillside",
    risk: "Moderate",
    rainfall: 50,
    temp: 18,
  },
  {
    id: "C",
    name: "Zone C - Steep Slope",
    risk: "High",
    rainfall: 80,
    temp: 16,
  },
  {
    id: "D",
    name: "Zone D - Riverbank",
    risk: "Moderate",
    rainfall: 40,
    temp: 20,
  },
];

export default function RiskMap() {
  const [viewMode, setViewMode] = useState("public"); // public or engineer

  return (

    
    <div className="riskmap-container">
      <h1 className="page-title">Risk Map & Forecast</h1>

      {/* VIEW MODE TOGGLE */}
      <div className="view-toggle">
        <button
          className={viewMode === "public" ? "active" : ""}
          onClick={() => setViewMode("public")}
        >
          Public View
        </button>
        <button
          className={viewMode === "engineer" ? "active" : ""}
          onClick={() => setViewMode("engineer")}
        >
          Engineer View
        </button>
      </div>

      {/* MAP & INFO */}
      <div className="map-section">
        {/* Placeholder for interactive map */}

        {/* ZONE INFO CARDS */}
        <div className="zone-cards">
          {zones.map((zone) => (
            <div
              key={zone.id}
              className={`zone-card ${zone.risk.toLowerCase()}`}
            >
              <h3>
                <MapPin size={18} /> {zone.name}
              </h3>
              <p>
                <AlertTriangle size={14} /> Risk Level:{" "}
                <span className={`risk ${zone.risk.toLowerCase()}`}>
                  {zone.risk}
                </span>
              </p>
              <p>
                <CloudRain size={14} /> Rainfall: {zone.rainfall} mm
              </p>
              <p>
                <Thermometer size={14} /> Temperature: {zone.temp}°C
              </p>

              {viewMode === "engineer" && (
                <div className="engineer-extra">
                  <p>Historical Incidents: 2</p>
                  <p>Detected Cracks: 3</p>
                  <p>Active Sensors: 5</p>
                  <p>Layer Toggle Options: Sensors / Cracks / Past Incidents</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
