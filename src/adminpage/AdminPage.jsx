import React, { useState, useEffect } from "react";
import axios from "axios";
import "./adminpage.css";

const AdminPage = () => {
  const [title, setTitle] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // PDF List State
  const [pdfs, setPdfs] = useState([]);
  const [fetching, setFetching] = useState(true);

  // Fetch all uploaded PDFs
  const fetchPdfs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api");
      setPdfs(response.data);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  // Handle file input
  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  // Handle PDF upload
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !pdfFile) {
      return setMessage("⚠️ Please fill all fields.");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("pdf", pdfFile);

    try {
      setLoading(true);
      setMessage("");
      const response = await axios.post(
        "http://localhost:8000/api/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setMessage("✅ PDF uploaded successfully!");
      setTitle("");
      setPdfFile(null);
      console.log(response.data);

      // Refresh PDF list immediately after upload
      fetchPdfs();
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to upload PDF. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <div className="upload-container">
        <h2>📄 Upload a PDF</h2>
        <form onSubmit={handleSubmit} className="upload-form">
          <label htmlFor="title">PDF Title:</label>
          <input
            type="text"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label htmlFor="pdf">Choose PDF file:</label>
          <input
            type="file"
            id="pdf"
            accept="application/pdf"
            onChange={handleFileChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Uploading..." : "Upload PDF"}
          </button>

          {message && <p className="upload-message">{message}</p>}
        </form>
      </div>

      <div className="pdf-list-container">
        <h2>📚 Uploaded PDFs</h2>

        {fetching ? (
          <p className="loading-text">Loading PDFs...</p>
        ) : pdfs.length === 0 ? (
          <p className="no-pdfs">No PDFs uploaded yet.</p>
        ) : (
          <ul className="pdf-list">
            {pdfs.map((pdf) => (
              <li key={pdf._id} className="pdf-item">
                <h3>{pdf.title}</h3>
                <a
                  href={`http://localhost:8000/${pdf.pdfPath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn"
                >
                  📥 View / Download
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
