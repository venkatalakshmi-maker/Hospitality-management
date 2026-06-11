import "./MyAppointments.css";

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

export default function MyAppointments({ onBookNew, onReschedule }) {
  const appointments = [
    {
      id: 1,
      doctor: "Dr. James Wilson",
      department: "General Medicine",
      date: "2026-01-03 at 09:00",
      type: "In-Person",
    },
  ];

  return (
    <div className="ma-wrapper">
      {/* Page Header */}
      <div className="ma-header">
        <div>
          <h1 className="ma-title">My Appointments</h1>
          <p className="ma-sub">View and manage your appointments</p>
        </div>
        <button className="ma-btn-book" onClick={onBookNew}>
          <CalendarIcon />
          Book New Appointment
        </button>
      </div>

      {/* Appointments List */}
      <div className="ma-list">
        {appointments.map((appt) => (
          <div className="ma-card" key={appt.id}>
            {/* Doctor Icon */}
            <div className="ma-doc-icon">
              <CalendarIcon />
            </div>

            {/* Info */}
            <div className="ma-info">
              <div className="ma-doctor">{appt.doctor}</div>
              <div className="ma-dept">{appt.department}</div>
              <div className="ma-date">{appt.date}</div>
            </div>

            {/* Actions */}
            <div className="ma-actions">
              <button className="ma-btn-reschedule" onClick={onReschedule}>
                Reschedule
              </button>
              <button className="ma-btn-virtual">
                Join Virtual
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}