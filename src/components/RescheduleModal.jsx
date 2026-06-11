import "./Reschedule.css";

export default function Reschedule({ onClose }) {
  return (
    <div className="rs-overlay" onClick={onClose}>
      <div className="rs-box" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="rs-header">
          <h2 className="rs-title">Reschedule Appointment</h2>
          <button className="rs-close" onClick={onClose}>&#x2715;</button>
        </div>

        {/* Body */}
        <div className="rs-body">

          {/* Current Appointment Info */}
          <div className="rs-current">
            <div className="rs-current-label">Current Appointment</div>
            <div className="rs-current-doctor">Dr. James Wilson – General Medicine</div>
            <div className="rs-current-date">January 3, 2026 at 9:00 AM</div>
          </div>

          {/* New Date & Time */}
          <div className="rs-row">
            <div className="rs-group">
              <label className="rs-label">New Date <span className="rs-required">*</span></label>
              <input type="date" className="rs-input" />
            </div>
            <div className="rs-group">
              <label className="rs-label">New Time <span className="rs-required">*</span></label>
              <select className="rs-input">
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

          {/* Reason */}
          <div className="rs-group">
            <label className="rs-label">Reason for Rescheduling</label>
            <textarea
              className="rs-input rs-textarea"
              placeholder="Optional – let us know why you're rescheduling"
              rows={3}
            />
          </div>

        </div>

        {/* Footer */}
        <div className="rs-footer">
          <button className="rs-btn-confirm">&#10003; Confirm Reschedule</button>
          <button className="rs-btn-cancel" onClick={onClose}>Cancel</button>
        </div>

      </div>
    </div>
  );
}