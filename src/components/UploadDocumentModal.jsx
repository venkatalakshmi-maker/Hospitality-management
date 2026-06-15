import { useState } from "react";
import "./UploadDocumentModal.css";

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function UploadArrowIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0984e3" strokeWidth="1.8">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0984e3" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export default function UploadDocumentModal({ onClose }) {
  const [category, setCategory]   = useState("");
  const [docName, setDocName]     = useState("");
  const [notes, setNotes]         = useState("");
  const [dragOver, setDragOver]   = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  function handleDrop(e) {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) setSelectedFile(file);
  }

  function handleFileInput(e) {
    const file = e.target.files[0];
    if (file) setSelectedFile(file);
  }

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title">Upload Medical Document</h2>
          <button className="modal-close" onClick={onClose}><CloseIcon /></button>
        </div>

        <div className="modal-body">

          {/* Document Category */}
          <div className="form-group">
            <label className="form-label">Document Category <span className="required">*</span></label>
            <input
              className="form-input"
              type="text"
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
          </div>

          {/* Select Files */}
          <div className="form-group">
            <label className="form-label">Select File(s) <span className="required">*</span></label>
            <div
              className={`dropzone ${dragOver ? "dropzone--active" : ""}`}
              onDragOver={e => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => document.getElementById("file-input").click()}
            >
              <input
                id="file-input"
                type="file"
                accept=".png,.jpg,.jpeg,.pdf"
                style={{ display: "none" }}
                onChange={handleFileInput}
              />
              <UploadArrowIcon />
              {selectedFile ? (
                <p className="dropzone-filename">{selectedFile.name}</p>
              ) : (
                <>
                  <p className="dropzone-main">Click to upload or drag and drop</p>
                  <p className="dropzone-sub">PNG, JPG, PDF up to 10MB</p>
                </>
              )}
            </div>
          </div>

          {/* Document Name */}
          <div className="form-group">
            <label className="form-label">Document Name</label>
            <input
              className="form-input"
              type="text"
              placeholder="e.g. Blood Test Report - Jan 2026"
              value={docName}
              onChange={e => setDocName(e.target.value)}
            />
          </div>

          {/* Notes */}
          <div className="form-group">
            <label className="form-label">Notes (Optional)</label>
            <textarea
              className="form-textarea"
              placeholder="Add any notes about this document..."
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </div>

          {/* Privacy Notice */}
          <div className="privacy-notice">
            <ShieldIcon />
            <p>
              <strong>Privacy Notice:</strong> are securely encrypted and only accessible to you and authorized
              healthcare providers at this facility.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn-upload-doc">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Upload Document
          </button>
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
        </div>

      </div>
    </div>
  );
}