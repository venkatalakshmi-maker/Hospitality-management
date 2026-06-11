import "./BookAppointmentModal.css";

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

export default function BookAppointmentModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title">Book New Appointment</h2>
          <button className="modal-close" onClick={onClose}>&#x2715;</button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Select Department */}
          <div className="form-group">
            <label className="form-label">Select Department <span className="required">*</span></label>
            <select className="form-control">
              <option value="">-- Select Department --</option>
              <option>General Medicine</option>
              <option>Cardiology</option>
              <option>Orthopedics</option>
              <option>Neurology</option>
              <option>Pediatrics</option>
              <option>Dermatology</option>
            </select>
          </div>

          {/* Select Doctor */}
          <div className="form-group">
            <label className="form-label">Select Doctor <span className="required">*</span></label>
            <select className="form-control">
              <option value="">-- Select Doctor --</option>
              <option>Dr. James Wilson</option>
              <option>Dr. Sarah Connor</option>
              <option>Dr. Michael Lee</option>
              <option>Dr. Priya Sharma</option>
            </select>
          </div>

          {/* Date & Time */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Preferred Date <span className="required">*</span></label>
              <input type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">Preferred Time <span className="required">*</span></label>
              <select className="form-control">
                <option value="">-- Select Time --</option>
                <option>9:00 AM</option>
                <option>9:30 AM</option>
                <option>10:00 AM</option>
                <option>10:30 AM</option>
                <option>11:00 AM</option>
                <option>2:00 PM</option>
                <option>2:30 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
              </select>
            </div>
          </div>

          {/* Appointment Type */}
          <div className="form-group">
            <label className="form-label">Appointment Type <span className="required">*</span></label>
            <select className="form-control">
              <option value="">-- Select Type --</option>
              <option>In-Person Visit</option>
              <option>Virtual / Teleconsultation</option>
              <option>Follow-Up</option>
              <option>Emergency</option>
            </select>
          </div>

          {/* Reason for Visit */}
          <div className="form-group">
            <label className="form-label">Reason for Visit</label>
            <textarea
              className="form-control form-textarea"
              placeholder="Describe your symptoms or reason for consultation..."
              rows={3}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn-confirm">
            <CalendarIcon />
            Confirm Booking
          </button>
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
