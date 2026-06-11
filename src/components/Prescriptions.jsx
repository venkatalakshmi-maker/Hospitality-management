import "./Prescriptions.css";

const prescriptions = [
  {
    id: 1,
    name: "Metformin 500mg",
    doctor: "Dr. James Wilson",
    dosage: "Twice daily",
    duration: "30 days",
    date: "Dec 28, 2025",
    status: "Active",
  },
  
];

export default function Prescriptions() {
  return (
    <div className="rx-page">
      <div className="content-header">
        <div>
          <h1 className="welcome-title">Prescriptions</h1>
          <p className="welcome-sub">View and manage your prescriptions</p>
        </div>
      </div>

      <div className="rx-section">
        <h2 className="rx-section-title">Active Prescriptions</h2>

        <div className="rx-list">
          {prescriptions.map(rx => (
            <div key={rx.id} className="rx-card">
              <div className="rx-card-top">
                <div>
                  <div className="rx-name">{rx.name}</div>
                  <div className="rx-doctor">Prescribed by {rx.doctor}</div>
                </div>
                <span className={`rx-badge ${rx.status === "Active" ? "rx-badge--active" : "rx-badge--expired"}`}>
                  {rx.status}
                </span>
              </div>

              <div className="rx-card-bottom">
                <div className="rx-meta-col">
                  <div className="rx-meta-label">Dosage</div>
                  <div className="rx-meta-value">{rx.dosage}</div>
                </div>
                <div className="rx-meta-col">
                  <div className="rx-meta-label">Duration</div>
                  <div className="rx-meta-value">{rx.duration}</div>
                </div>
                <div className="rx-meta-col">
                  <div className="rx-meta-label">Prescribed Date</div>
                  <div className="rx-meta-value">{rx.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}