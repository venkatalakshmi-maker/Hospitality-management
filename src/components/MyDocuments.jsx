import { usestate } from "react";
import "./MyDocuments.css";
import UploadDocumentModal from "./
UploadDocumentsModal";

// ---icons-----//
function Uploading(){
    return (
        <svg width="14" height="14" viewBox="0 0 24 24"
        fill="none" stroke="currentXolor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 0"
        </svg>
    )
}

export default function MyDocuments() {
    const [uploadOpen,setUploadOpen] = useState(false);
    return(
        <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
        <div className="docs-header">
        <div>
          <h1 className="docs-title">My Documents</h1>
          <p className="docs-subtitle">Upload and Manage your medical documents,scans and reports</p>
        </div>

        <button className="btn-upload" onClick={() =>
            setUploadOpen(true)}>
        </button>
        
        </div>

        <div className="docs-stats-grid">
            <div className="docs-stats-card">
                <div classNmae="docs-stats-icon docs-stat-icon-blue">
                    <TotalDocsicon/>

                </div>
               
            </div>
            <div className="docs-stats-label">Total Documents</div>
            <div classNmae="docs-stats-value">2 Files</div>
        </div>
        </div>


    }
}