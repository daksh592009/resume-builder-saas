import React, { useState } from "react";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f0f2f5", minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "auto", background: "#fff", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", padding: "2rem" }}>
        <h1 style={{ textAlign: "center", color: "#2c3e50", marginBottom: "2rem" }}>Resume Builder</h1>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          {/* FORM SECTION */}
          <div style={{ flex: "1 1 45%" }}>
            <h2 style={{ color: "#34495e" }}>Your Details</h2>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} style={inputStyle} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={inputStyle} />
            <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} style={inputStyle} />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} style={inputStyle} />
            <textarea name="education" placeholder="Education (e.g., Degree, School, Year)" value={formData.education} onChange={handleChange} style={textAreaStyle} />
            <textarea name="experience" placeholder="Experience (e.g., Job title, Company, Duration)" value={formData.experience} onChange={handleChange} style={textAreaStyle} />
            <textarea name="skills" placeholder="Skills (e.g., SEO, Design, React)" value={formData.skills} onChange={handleChange} style={textAreaStyle} />
          </div>

          {/* PREVIEW SECTION */}
          <div style={{ flex: "1 1 45%", borderLeft: "2px solid #ecf0f1", paddingLeft: "2rem" }}>
            <h2 style={{ color: "#34495e" }}>Resume Preview</h2>
            <div style={{ background: "#fdfdfd", padding: "1rem", borderRadius: "6px" }}>
              <h2 style={{ color: "#2c3e50" }}>{formData.name || "Your Name"}</h2>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Address:</strong> {formData.address}</p>
              <hr />
              <p><strong>Education:</strong><br />{formData.education}</p>
              <p><strong>Experience:</strong><br />{formData.experience}</p>
              <p><strong>Skills:</strong><br />{formData.skills}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Styles
const inputStyle = {
  display: "block",
  width: "100%",
  margin: "10px 0",
  padding: "10px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const textAreaStyle = {
  ...inputStyle,
  height: "80px",
};
