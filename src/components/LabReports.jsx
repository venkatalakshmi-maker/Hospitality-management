import { useState } from "react";
import "./LabReports.css";

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

const reports = [
  {
    id: 1,
    name: "HbA1c",
    testId: "LAB003",
    doctor: "Dr. James Wilson",
    date: "2026-01-03 10:30",
    status: "completed",
    results: [
      { parameter: "HbA1c", result: "7.2%", normalRange: "4.0 - 5.6%", status: "High" },
    ],
    doctorNotes: "HbA1c slightly elevated. Continue current medication and dietary control.",
  },
];

export default function LabReports() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="lab-page">
      <div className="content-header">
        <div>
          <h1 className="welcome-title">Lab Reports</h1>
          <p className="welcome-sub">View your laboratory test results</p>
        </div>
      </div>

      <div className="lab-list">
        {reports.map(rep => (
          <div key={rep.id} className="lab-row">
            <div className="lab-row-left">
              <div className="lab-name">{rep.name}</div>
              <div className="lab-meta">Ordered by {rep.doctor} · {rep.date}</div>
            </div>
            <div className="lab-row-actions">
              <button className="btn-download">
                <DownloadIcon /> Download PDF
              </button>
              <button className="btn-view" onClick={() => setSelected(rep)}>
                View Results
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="lab-modal" onClick={e => e.stopPropagation()}>

            <div className="lab-modal-header">
              <div>
                <h2 className="lab-modal-title">Lab Test Results</h2>
                <p className="lab-modal-sub">{selected.name}</p>
              </div>
              <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            </div>

            <div className="lab-modal-body">

              <div className="lab-info-grid">
                <div>
                  <div className="lab-info-label">Test ID</div>
                  <div className="lab-info-value">{selected.testId}</div>
                </div>
                <div>
                  <div className="lab-info-label">Status</div>
                  <span className="lab-status-badge">{selected.status}</span>
                </div>
                <div>
                  <div className="lab-info-label">Ordered By</div>
                  <div className="lab-info-value">{selected.doctor}</div>
                </div>
                <div>
                  <div className="lab-info-label">Completed Date</div>
                  <div className="lab-info-value">{selected.date}</div>
                </div>
              </div>

              <div className="lab-results-section">
                <h3 className="lab-results-title">Test Results</h3>
                <table className="lab-table">
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Result</th>
                      <th>Normal Range</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selected.results.map((r, i) => (
                      <tr key={i}>
                        <td>{r.parameter}</td>
                        <td>{r.result}</td>
                        <td>{r.normalRange}</td>
                        <td>
                          <span className={`result-badge ${r.status === "Normal" ? "result-badge--normal" : "result-badge--high"}`}>
                            {r.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="lab-notes-section">
                <div className="lab-info-label">Doctor's Notes</div>
                <p className="lab-notes-text">{selected.doctorNotes}</p>
              </div>

            </div>

            <div className="lab-modal-footer">
              <button className="btn-download-full">
                <DownloadIcon /> Download Full Report
              </button>
              <button className="btn-teal" onClick={() => setSelected(null)}>Close</button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}