import { useState } from "react";
import "./App.css";

const LayoutGridIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
);
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
);
const FileTextIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
);
const PillIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.5 20.5 3.5 13.5a5 5 0 1 1 7-7l7 7a5 5 0 1 1-7 7z"/><line x1="8.5" y1="8.5" x2="15.5" y2="15.5"/></svg>
);
const ActivityIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
);
const DollarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
);
const BellIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
);
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
);
const HomeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const LogOutIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
);
const CheckCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00b894" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);
const AlertIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0984e3" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
);
const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

export default function App() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  const navItems = [
    { label: "Dashboard", icon: <LayoutGridIcon /> },
    { label: "My Appointments", icon: <CalendarIcon /> },
    { label: "Medical Records", icon: <FileTextIcon /> },
    { label: "Prescriptions", icon: <PillIcon /> },
    { label: "Lab Reports", icon: <ActivityIcon /> },
    { label: "Billing & Payments", icon: <DollarIcon /> },
  ];

  return (
    <div className="app-wrapper">
      {/* Top Browser Bar */}
      <div className="browser-bar">
        <span className="browser-title">Enterprise Hospital Information System</span>
      </div>

      <div className="app-container">
        {/* Tab Bar */}
        <div className="tab-bar">
          <div className="tab active-tab">
            <span className="tab-logo">A</span>
            <span>MediCare HIS</span>
            <button className="tab-close"><XIcon /></button>
          </div>
          <div className="search-bar">
            <SearchIcon />
            <input type="text" placeholder="Search patients, ID, phone..." />
          </div>
          <div className="top-right">
            <div className="campus-badge">
              <HomeIcon />
              <span>Main Campus</span>
            </div>
            <div className="user-badge">
              <BellIcon />
              <span>John Anderson</span>
            </div>
          </div>
        </div>

        <div className="main-layout">
          {/* Sidebar */}
          <aside className="sidebar">
            <nav className="sidebar-nav">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className={`nav-item ${activeNav === item.label ? "nav-item--active" : ""}`}
                  onClick={() => setActiveNav(item.label)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="sidebar-footer">
              <div className="user-profile">
                <div className="avatar">JA</div>
                <div className="user-info">
                  <span className="user-name">John Anderson</span>
                  <span className="user-role">Patient</span>
                </div>
              </div>
              <button className="logout-btn">
                <LogOutIcon />
                <span>Logout</span>
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="main-content">
            {/* Header */}
            <div className="content-header">
              <div>
                <h1 className="welcome-title">Welcome back, John!</h1>
                <p className="welcome-sub">Your health dashboard and medical records</p>
              </div>
              <button className="btn-primary">
                <CalendarIcon />
                Book Appointment
              </button>
            </div>

            {/* Stats Row */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon stat-icon--blue"><CalendarIcon /></div>
                <div>
                  <div className="stat-label">Upcoming Visits</div>
                  <div className="stat-value">1 Scheduled</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon stat-icon--blue"><FileTextIcon /></div>
                <div>
                  <div className="stat-label">Medical Records</div>
                  <div className="stat-value">12 Documents</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon stat-icon--teal"><ActivityIcon /></div>
                <div>
                  <div className="stat-label">Lab Reports</div>
                  <div className="stat-value">5 Available</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon stat-icon--orange"><DollarIcon /></div>
                <div>
                  <div className="stat-label">Pending Bills</div>
                  <div className="stat-value">0 Unpaid</div>
                </div>
              </div>
            </div>

            {/* Middle Row */}
            <div className="mid-grid">
              {/* Next Appointment */}
              <div className="card appointment-card">
                <h2 className="card-title">Next Appointment</h2>
                <div className="appointment-body">
                  <div className="doctor-info">
                    <div className="doctor-icon">
                      <CalendarIcon />
                    </div>
                    <div>
                      <div className="doctor-name">Dr. James Wilson</div>
                      <div className="doctor-dept">General Medicine</div>
                    </div>
                  </div>
                  <div className="appointment-meta">
                    <div className="meta-item">
                      <span className="meta-label">Date</span>
                      <span className="meta-value">Jan 3, 2026</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Time</span>
                      <span className="meta-value">9:00 AM</span>
                    </div>
                  </div>
                  <div className="appointment-actions">
                    <button className="btn-ghost">Reschedule</button>
                    <button className="btn-teal">Join Virtual</button>
                  </div>
                </div>
              </div>

              {/* Recent Notifications */}
              <div className="card notifications-card">
                <h2 className="card-title">Recent Notifications</h2>
                <div className="notification-list">
                  <div className="notification-item">
                    <span className="notif-icon"><AlertIcon /></span>
                    <div className="notif-body">
                      <div className="notif-title">Lab results available</div>
                      <div className="notif-sub">HbA1c test results are ready to view</div>
                      <div className="notif-time">2 hours ago</div>
                    </div>
                  </div>
                  <div className="notification-item">
                    <span className="notif-icon"><CheckCircleIcon /></span>
                    <div className="notif-body">
                      <div className="notif-title">Appointment confirmed</div>
                      <div className="notif-sub">Your appointment with Dr. Wilson is confirmed</div>
                      <div className="notif-time">1 day ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Health Summary */}
            <div className="card health-card">
              <h2 className="card-title">Health Summary</h2>
              <div className="health-grid">
                <div className="health-col">
                  <div className="health-label">Current Conditions</div>
                  <div className="health-tags">
                    <span className="tag tag--red">Hypertension</span>
                    <span className="tag tag--orange">Type 2 Diabetes</span>
                  </div>
                </div>
                <div className="health-col">
                  <div className="health-label">Allergies</div>
                  <div className="health-tags">
                    <span className="tag tag--red">Penicillin</span>
                  </div>
                </div>
                <div className="health-col">
                  <div className="health-label">Blood Group</div>
                  <div className="health-tags">
                    <span className="tag tag--blue">O+ Positive</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}