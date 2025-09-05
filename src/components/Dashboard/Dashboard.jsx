import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Camera } from "lucide-react";
import "./Dashboard.css";

// Chart.js registration
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Sample data
const rainfallData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Rainfall (mm)",
      data: [120, 90, 150, 80, 70, 200],
      backgroundColor: "#3b82f6",
    },
    {
      label: "Slope Failure Probability (%)",
      data: [5, 8, 12, 7, 6, 15],
      type: "line",
      borderColor: "#b91c1c",
      backgroundColor: "transparent",
      tension: 0.4,
      yAxisID: "y1",
    },
  ],
};

const vibrationData = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [
    {
      label: "Vibration (Hz)",
      data: [0.1, 0.2, 0.15, 0.25, 0.3, 0.28, 0.35],
      borderColor: "#10b981",
      backgroundColor: "rgba(16,185,129,0.2)",
      fill: true,
      tension: 0.3,
    },
  ],
};

// Sensor and report data
const sensors = [
  {
    id: "S-001",
    type: "Displacement",
    location: "Zone A",
    value: "12mm",
    status: "healthy",
  },
  {
    id: "S-002",
    type: "Vibration",
    location: "Zone B",
    value: "0.28Hz",
    status: "healthy",
  },
  {
    id: "S-003",
    type: "Strain",
    location: "Zone C",
    value: "0.8%",
    status: "warning",
  },
  {
    id: "S-004",
    type: "Pore Pressure",
    location: "Zone D",
    value: "120kPa",
    status: "critical",
  },
];

const reports = [
  {
    name: "Soil Stability Report – Hillside Region",
    description:
      "Detailed geotechnical evaluation of hillside soils, including slope gradient, cohesion, friction angle, pore pressure monitoring, and risk assessment. Data from in-situ sensors and periodic surveys provide predictive insights into potential landslide events.",
    link: "#",
  },
  {
    name: "Rockfall & Debris Risk Analysis – Mountain Sectors",
    description:
      "3D terrain modelling combined with historical incident mapping to assess rockfall trajectories and debris flow probability. Includes sensor-based vibration and displacement readings, hazard zonation, and mitigation recommendations for vulnerable areas.",
    link: "#",
  },
  {
    name: "Evacuation & Traffic Reroute Guidelines",
    description:
      "Comprehensive plan covering emergency evacuation routes, safe assembly zones, traffic diversion strategies, and estimated response times. Incorporates real-time alerts from rainfall, slope displacement, and landslide risk sensors for dynamic operational adjustments.",
    link: "#",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="page-title">Sensor & Data Dashboard</h1>

      {/* SENSOR CARDS */}
      <div className="sensor-cards">
        {sensors.map((sensor) => (
          <div key={sensor.id} className={`sensor-card ${sensor.status}`}>
            <h3>{sensor.type}</h3>
            <p className="meta">
              {sensor.id} • {sensor.location}
            </p>
            <p className="value">{sensor.value}</p>
            <p className={`status ${sensor.status}`}>
              {sensor.status.toUpperCase()}
            </p>
          </div>
        ))}
      </div>

      {/* DRONE SURVEY COMPARISON */}
      {/* DRONE SURVEY COMPARISON */}
      <div className="drone-section">
        <h2 className="section-title">Drone Survey Comparison</h2>
        <div className="drone-images">
          <div className="drone-card">
            <h3>Before Scan</h3>

            <ul className="drone-info">
              <li>
                <strong>Date:</strong> 2024-01-15
              </li>
              <li>
                <strong>Slope Angle:</strong> 32°
              </li>
              <li>
                <strong>Detected Cracks:</strong> 2 small cracks
              </li>
              <li>
                <strong>Notes:</strong> Minor soil displacement near the road
                edge
              </li>
            </ul>
          </div>
          <div className="drone-card">
            <h3>After Scan</h3>

            <ul className="drone-info">
              <li>
                <strong>Date:</strong> 2024-01-22
              </li>
              <li>
                <strong>Slope Angle:</strong> 33°
              </li>
              <li>
                <strong>Detected Cracks:</strong> 3 medium cracks
              </li>
              <li>
                <strong>Notes:</strong> Increased displacement; alert level
                raised
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ANALYTICS CHARTS */}
      <div className="analytics-section">
        <h2 className="section-title">Analytics</h2>
        <div className="chart-card">
          <h3>Rainfall vs Slope Failure Probability</h3>
          <Bar
            data={rainfallData}
            options={{
              responsive: true,
              interaction: { mode: "index", intersect: false },
              scales: {
                y: {
                  beginAtZero: true,
                  title: { display: true, text: "Rainfall (mm)" },
                },
                y1: {
                  beginAtZero: true,
                  position: "right",
                  title: { display: true, text: "Failure Probability (%)" },
                  grid: { drawOnChartArea: false },
                },
              },
            }}
          />
        </div>
        <div className="chart-card">
          <h3>Vibration Trend Over Time</h3>
          <Line
            data={vibrationData}
            options={{
              responsive: true,
              plugins: { legend: { position: "top" } },
              scales: { y: { beginAtZero: true } },
            }}
          />
        </div>

        {/* TECHNICAL REPORTS */}
        <div className="chart-card">
          <h3>Technical Reports</h3>
          <ul className="report-list">
            {reports.map((r, i) => (
              <li key={i} className="report-item-mini">
                <a href={r.link} target="_blank" rel="noopener noreferrer">
                  {r.name}
                </a>
                <p className="report-description">{r.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
