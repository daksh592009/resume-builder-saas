import { useState } from 'react';
import html2pdf from 'html2pdf.js';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '', email: '', education: '', experience: '', skills: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const downloadPDF = () => {
    const element = document.getElementById('resume-preview');
    html2pdf().from(element).save('resume.pdf');
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Resume Builder</h1>
      <form>
        {["name", "email", "education", "experience", "skills"].map((field) => (
          <div key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <br />
            <input type="text" name={field} value={formData[field]} onChange={handleChange} />
            <br /><br />
          </div>
        ))}
      </form>
      <h2>Preview:</h2>
      <div id="resume-preview" style={{ border: '1px solid #000', padding: 10 }}>
        <h2>{formData.name}</h2>
        <p><b>Email:</b> {formData.email}</p>
        <p><b>Education:</b> {formData.education}</p>
        <p><b>Experience:</b> {formData.experience}</p>
        <p><b>Skills:</b> {formData.skills}</p>
      </div>
      <button onClick={downloadPDF}>Download as PDF</button>
    </div>
  );
}