import React, { useState } from "react";
import { AlertTriangle, Thermometer, CloudRain, MapPin } from "lucide-react";
import "./RiskMap.css";

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
        <div className="map-placeholder">
          <p>Interactive 2D/3D Terrain Map Placeholder</p>
        </div>

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

      {/* FORECAST & NOTES */}
      <div className="forecast-section">
        <h2 className="section-title">Weather Forecast & Safety Notes</h2>
        <ul className="forecast-list">
          <li className="public high">
            Heavy rainfall expected in Hillside (Zone B) tomorrow: 70mm.
            Residents advised to avoid low-lying areas and steep slopes.
          </li>
          <li className="public high">
            Steep Slope (Zone C) at HIGH ALERT due to potential rockfall; all
            outdoor activity restricted.
          </li>
          <li className="public moderate">
            Riverbank (Zone D) shows moderate risk; monitor water levels and
            avoid flood-prone streets.
          </li>
          <li className="public low">
            Zone A (Mountain View) remains low risk, minor landslide signs
            observed near trails.
          </li>
          <li className="public moderate">
            Public: Follow color-coded warnings on map, check evacuation routes,
            carry emergency kits.
          </li>
          <li className="engineer high">
            Engineers: Analyze real-time slope displacement sensors in Zone C;
            expect >3mm shift in next 24 hours.
          </li>
          <li className="engineer high">
            Engineers: Compare recent drone survey with previous scans to
            identify micro-cracks near rock outcrops.
          </li>
          <li className="engineer moderate">
            Engineers: Cross-reference rainfall vs. historical slope failures;
            activate early warning sirens if threshold exceeded.
          </li>
        </ul>
      </div>
    </div>
  );
}
