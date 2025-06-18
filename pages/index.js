import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    experience: "",
    skills: "",
  });

  const [template, setTemplate] = useState("template1");
  const resumeRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownloadPDF = () => {
    const element = resumeRef.current;
    const options = {
      margin: 0.5,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
  };

  const renderTemplate = () => {
    if (template === "template1") {
      return (
        <div style={templateBox}>
          <h2 style={{ color: "#2c3e50" }}>{formData.name || "Your Name"}</h2>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Address:</strong> {formData.address}</p>
          <hr />
          <p><strong>Education:</strong><br />{formData.education}</p>
          <p><strong>Experience:</strong><br />{formData.experience}</p>
          <p><strong>Skills:</strong><br />{formData.skills}</p>
        </div>
      );
    } else {
      return (
        <div style={{ ...templateBox, fontFamily: "Georgia, serif", color: "#4a4a4a" }}>
          <h1 style={{ borderBottom: "2px solid #aaa", paddingBottom: "0.2rem" }}>{formData.name || "Your Name"}</h1>
          <p><em>{formData.email} | {formData.phone} | {formData.address}</em></p>
          <h3>🎓 Education</h3>
          <p>{formData.education}</p>
          <h3>💼 Experience</h3>
          <p>{formData.experience}</p>
          <h3>🛠 Skills</h3>
          <p>{formData.skills}</p>
        </div>
      );
    }
  };

  return (
    <div style={pageStyle}>
      <div style={container}>
        <h1 style={title}>Resume Builder</h1>

        {/* Template Switcher */}
        <div style={{ marginBottom: "1rem" }}>
          <button onClick={() => setTemplate("template1")} style={buttonStyle}>Template 1</button>
          <button onClick={() => setTemplate("template2")} style={buttonStyle}>Template 2</button>
          <button onClick={handleDownloadPDF} style={downloadButton}>Download PDF</button>
        </div>

        <div style={formContainer}>
          <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} style={input} />
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={input} />
          <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} style={input} />
          <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} style={input} />
          <textarea name="education" placeholder="Education" value={formData.education} onChange={handleChange} style={textarea} />
          <textarea name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} style={textarea} />
          <textarea name="skills" placeholder="Skills" value={formData.skills} onChange={handleChange} style={textarea} />
        </div>

        <div ref={resumeRef} style={{ marginTop: "2rem", background: "#fff", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 0 10px #ccc" }}>
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
}

// 🔧 Styles
const pageStyle = { background: "#eef2f5", minHeight: "100vh", padding: "2rem" };
const container = { maxWidth: "960px", margin: "auto", background: "#fff", borderRadius: "10px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" };
const title = { textAlign: "center", color: "#2c3e50", marginBottom: "2rem" };
const input = { display: "block", width: "100%", margin: "8px 0", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" };
const textarea = { ...input, height: "80px" };
const formContainer = { marginBottom: "2rem" };
const buttonStyle = { marginRight: "10px", padding: "10px 15px", background: "#3498db", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" };
const downloadButton = { ...buttonStyle, background: "#27ae60" };
const templateBox = { background: "#f9f9f9", padding: "1rem", borderRadius: "5px", lineHeight: 1.6 };
.

.
