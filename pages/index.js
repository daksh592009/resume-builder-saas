import React, { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: "",
    experience: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Resume Builder SaaS</h1>

      <form style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "300px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "300px" }}
        />
        <textarea
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "300px", height: "80px" }}
        />
        <textarea
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "300px", height: "80px" }}
        />
        <textarea
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0", padding: "8px", width: "300px", height: "60px" }}
        />
      </form>

      <div style={{ border: "1px solid #ddd", padding: "1rem", width: "60%", background: "#f9f9f9" }}>
        <h2>{formData.name}</h2>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Education:</strong><br />{formData.education}</p>
        <p><strong>Experience:</strong><br />{formData.experience}</p>
        <p><strong>Skills:</strong><br />{formData.skills}</p>
      </div>
    </div>
  );
}
