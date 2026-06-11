import "./MedicalRecords.css";

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

const records = [
  {
    id: 1,
    type: "Follow-up Consultation",
    doctor: "Dr. James Wilson",
    date: "Dec 28, 2025",
    diagnosis: "Hypertension, Type 2 Diabetes - Stable condition",
    treatment: "Continue current medications. Follow-up in 3 months.",
  },
  
];

export default function MedicalRecords() {
  return (
    <div className="mr-page">
      <div className="content-header">
        <div>
          <h1 className="welcome-title">Medical Records</h1>
          <p className="welcome-sub">Access your complete medical history</p>
        </div>
      </div>

      <div className="mr-section">
        <h2 className="mr-section-title">Recent Visits</h2>

        <div className="mr-list">
          {records.map(rec => (
            <div key={rec.id} className="mr-row">
              <div className="mr-row-left">
                <div className="mr-type">{rec.type}</div>
                <div className="mr-doctor-date">{rec.doctor} - {rec.date}</div>
                <div className="mr-diagnosis">
                  <span className="mr-bold">Diagnosis:</span>{rec.diagnosis}
                </div>
                <div className="mr-treatment">
                  <span className="mr-bold">Treatment:</span>{rec.treatment}
                </div>
              </div>
              <button className="mr-download-btn">
                <DownloadIcon />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}