import React, { useState } from "react";
import {
  Shield,
  Users,
  Activity,
  AlertTriangle,
  MapPin,
  Camera,
  PhoneCall,
} from "lucide-react";
import "../Admin/Admin.css";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("reports");

  return (
    <div className="admin-container">
      {/* HEADER */}
      <header className="admin-header">
        <div>
          <h1 className="admin-title">Admin & Community Panel</h1>
          <p className="admin-subtitle">
            System management & community engagement
          </p>
        </div>
        <div className="access-badges">
          <span className="badge community">Community</span>
          <span className="badge admin">Admin</span>
        </div>
      </header>

      {/* TAB BUTTONS */}
      <div className="tabs">
        <button
          className={activeTab === "reports" ? "tab active" : "tab"}
          onClick={() => setActiveTab("reports")}
        >
          Community Reports
        </button>
        <button
          className={activeTab === "submit" ? "tab active" : "tab"}
          onClick={() => setActiveTab("submit")}
        >
          Submit Report
        </button>
        <button
          className={activeTab === "safety" ? "tab active" : "tab"}
          onClick={() => setActiveTab("safety")}
        >
          Safety Info
        </button>
      </div>

      {/* TAB CONTENT */}
      <div className="tab-content">
        {/* COMMUNITY REPORTS */}
        {activeTab === "reports" && (
          <section className="content-card">
            <h2 className="section-title">Community Reports</h2>

            <div className="report-item">
              <h3>
                <MapPin size={18} /> Ground Crack
              </h3>
              <p className="meta">
                CR-001 • Reported by John Smith • Hillside Drive, near mailbox
                123
              </p>
              <p>
                New crack appeared after yesterday’s rain, about 2 feet long.
              </p>
              <p className="meta">Reported: 2024-01-20 14:30</p>
              <div className="tags">
                <span className="tag medium">Medium</span>
                <span className="tag investigating">Investigating</span>
              </div>
            </div>

            <div className="report-item">
              <h3>
                <MapPin size={18} /> Unusual Vibration
              </h3>
              <p className="meta">
                CR-002 • Reported by Sarah Lee • Mountain Road, sector 5
              </p>
              <p>
                Residents reported unusual vibration for 10 seconds last night.
              </p>
              <div className="tags">
                <span className="tag low">Low</span>
                <span className="tag verified">Verified</span>
              </div>
              <p className="meta">
                <Camera size={14} /> 2 images attached
              </p>
            </div>
          </section>
        )}

        {/* SUBMIT REPORT */}
        {activeTab === "submit" && (
          <section className="content-card grid-2">
            <div>
              <h2 className="section-title">Report Safety Concern</h2>
              <form className="report-form">
                <label>Type of Concern</label>
                <select>
                  <option>Select concern type...</option>
                  <option>Ground Crack</option>
                  <option>Unusual Vibration</option>
                  <option>Water Seepage</option>
                  <option>Rockfall/Debris</option>
                </select>

                <label>Location</label>
                <input type="text" placeholder="Street address, landmarks" />

                <label>Description</label>
                <textarea placeholder="Describe what you observed..." />

                <button type="submit" className="submit-btn">
                  Submit Report
                </button>
              </form>
            </div>

            <div>
              <h2 className="section-title">Reporting Guidelines</h2>
              <div className="guideline-box">
                <h3>What to Report</h3>
                <ul>
                  <li>New cracks in ground or pavement</li>
                  <li>Unusual ground vibrations</li>
                  <li>Trees or poles leaning</li>
                  <li>Water seepage from slopes</li>
                  <li>Rockfall or debris</li>
                </ul>
              </div>

              <div className="guideline-box emergency">
                <h3>Emergency Situations</h3>
                <p>
                  If you observe immediate danger or landslide movement, call
                  emergency services (911) before submitting a report.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* SAFETY INFO */}
        {activeTab === "safety" && (
          <section className="content-card grid-2">
            <div>
              <h2 className="section-title">Current Safety Status</h2>
              <div className="status-box moderate">
                <AlertTriangle size={30} />
                <h3>MODERATE RISK</h3>
                <p>Current conditions require caution</p>
              </div>
              <ul className="zone-status">
                <li>Zone A (Mountain View): Low</li>
                <li>Zone B (Hillside): Moderate</li>
                <li>Zone C (Steep Slope): High</li>
              </ul>
            </div>

            <div>
              <h2 className="section-title">Emergency Contacts</h2>
              <div className="contact-card red">
                <h3>Emergency Services</h3>
                <p>Life-threatening emergencies</p>
                <span className="contact-btn">911</span>
              </div>
              <div className="contact-card blue">
                <h3>Landslide Hotline</h3>
                <p>Report landslide activity</p>
                <span className="contact-btn">1-800-SLIDE</span>
              </div>
              <div className="contact-card green">
                <h3>Community Support</h3>
                <p>Non-emergency assistance</p>
                <span className="contact-btn">(555) 123-4567</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
