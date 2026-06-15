import { useState } from "react";
import "./App.css";
import BookAppointmentModal from "./components/BookAppointmentModal";
import RescheduleModal from "./components/RescheduleModal";
import MyAppointments from "./components/MyAppointments";
import MedicalRecords from "./components/MedicalRecords";
import Prescriptions from "./components/Prescriptions";
import LabReports from "./components/LabReports";
import Billing from "./components/Billing";
import MyDocuments from "./components/MyDocuments";

// ---- icons ----

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

function CalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function PillIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.5 20.5 3.5 13.5a5 5 0 1 1 7-7l7 7a5 5 0 1 1-7 7z" />
      <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00b894" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function AlertBellIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0984e3" strokeWidth="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ---- MediCare HIS Tab Logo ----
function TabLogo() {
  return (
    <div className="tab-logo-img">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    </div>
  );
}

// ---- Patient Avatar Circle ----
function PatientAvatar() {
  return (
    <div className="patient-avatar-circle">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  );
}

// ---- nav config ----

const navItems = [
  { label: "Dashboard",          icon: <GridIcon />     },
  { label: "My Appointments",    icon: <CalIcon />      },
  { label: "Medical Records",    icon: <FileIcon />     },
  { label: "Prescriptions",      icon: <PillIcon />     },
  { label: "Lab Reports",        icon: <ActivityIcon /> },
  { label: "My Documents",       icon: <UploadIcon />   },
  { label: "Billing & Payments", icon: <DollarIcon />   },
];

// ---- main component ----

export default function App() {
  const [activePage, setActivePage]         = useState("Dashboard");
  const [bookingOpen, setBookingOpen]       = useState(false);
  const [rescheduleOpen, setRescheduleOpen] = useState(false);

  return (
    <div className="app-wrapper">

      {/* thin top bar */}
      <div className="browser-bar">
        Enterprise Hospital Information System
      </div>

      <div className="app-container">

        {/* tab + search row */}
        <div className="tab-bar">
          <div className="tab">
            <TabLogo />
            <span>MediCare HIS</span>
            <button className="tab-close"><CloseIcon /></button>
          </div>

          <div className="search-bar">
            <SearchIcon />
            <input placeholder="Search patients, ID, phone..." />
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

          {/* sidebar */}
          <aside className="sidebar">
            <nav className="sidebar-nav">
              {navItems.map(item => (
                <button
                  key={item.label}
                  className={`nav-item ${activePage === item.label ? "nav-item--active" : ""}`}
                  onClick={() => setActivePage(item.label)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="sidebar-footer">
              <div className="user-profile">
                <div className="avatar"><PatientAvatar /></div>
                <div>
                  <span className="user-name">John Anderson</span>
                  <span className="user-role">Patient</span>
                </div>
              </div>
              <button className="logout-btn">
                <LogoutIcon />
                Logout
              </button>
            </div>
          </aside>

          {/* page content */}
          <main className="main-content">
            {activePage === "Medical Records" ? (
              <MedicalRecords />
            ) : activePage === "Prescriptions" ? (
              <Prescriptions />
            ) : activePage === "Lab Reports" ? (
              <LabReports />
            ) : activePage === "My Documents" ? (
              <MyDocuments />
            ) : activePage === "Billing & Payments" ? (
              <Billing />
            ) : activePage === "My Appointments" ? (
              <MyAppointments
                onBookNew={() => setBookingOpen(true)}
                onReschedule={() => setRescheduleOpen(true)}
              />
            ) : (
              <Dashboard
                onBookAppointment={() => setBookingOpen(true)}
                onReschedule={() => setRescheduleOpen(true)}
              />
            )}
          </main>

        </div>
      </div>

      {bookingOpen    && <BookAppointmentModal onClose={() => setBookingOpen(false)} />}
      {rescheduleOpen && <RescheduleModal      onClose={() => setRescheduleOpen(false)} />}

    </div>
  );
}

// ---- dashboard page ----

function Dashboard({ onBookAppointment, onReschedule }) {
  return (
    <>
      <div className="content-header">
        <div>
          <h1 className="welcome-title">Welcome back, John!</h1>
          <p className="welcome-sub">Your health dashboard and medical records</p>
        </div>
        <button className="btn-primary" onClick={onBookAppointment}>
          <CalIcon />
          Book Appointment
        </button>
      </div>

      {/* stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon stat-icon--blue"><CalIcon /></div>
          <div>
            <div className="stat-label">Upcoming Visits</div>
            <div className="stat-value">1 Scheduled</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon stat-icon--blue"><FileIcon /></div>
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

      {/* mid row */}
      <div className="mid-grid">

        <div className="card">
          <h2 className="card-title">Next Appointment</h2>
          <div className="appointment-body">
            <div className="doctor-info">
              <div className="doctor-icon"><CalIcon /></div>
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
              <button className="btn-ghost" onClick={onReschedule}>Reschedule</button>
              <button className="btn-teal">Join Virtual</button>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Recent Notifications</h2>
          <div className="notification-list">
            <div className="notification-item">
              <AlertBellIcon />
              <div className="notif-body">
                <div className="notif-title">Lab results available</div>
                <div className="notif-sub">HbA1c test results are ready to view</div>
                <div className="notif-time">2 hours ago</div>
              </div>
            </div>
            <div className="notification-item">
              <CheckIcon />
              <div className="notif-body">
                <div className="notif-title">Appointment confirmed</div>
                <div className="notif-sub">Your appointment with Dr. Wilson is confirmed</div>
                <div className="notif-time">1 day ago</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* health summary */}
      <div className="card">
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
    </>
  );
}