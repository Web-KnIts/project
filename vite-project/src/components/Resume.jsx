import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

const ResumeBuilder = ({ resumeData }) => {
  const resumeRef = useRef();

  const handleDownloadPDF = () => {
    const element = resumeRef.current;
    const opt = {
      margin: 0.5,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  const { personal_info, summary, skills, experience, education, certifications, languages } =
    resumeData.resume;

  return (
    <div className="container p-5">
      <button
        onClick={handleDownloadPDF}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Download as PDF
      </button>

      <div ref={resumeRef} className="border p-6 bg-white rounded shadow">
        <h1 className="text-3xl font-bold">{personal_info.name}</h1>
        <h2 className="text-xl text-gray-600 mb-4">{personal_info.title}</h2>

        <p className="mb-4">{summary}</p>

        <section className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Skills</h3>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <strong>{category.replace(/_/g, " ")}:</strong> {items.join(", ")}
            </div>
          ))}
        </section>

        <section className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Experience</h3>
          {experience.map((job, idx) => (
            <div key={idx} className="mb-3">
              <strong>{job.title}</strong> @ {job.company} ({job.years})
              <ul className="list-disc list-inside">
                {job.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Education</h3>
          {education.map((edu, idx) => (
            <div key={idx}>
              <strong>{edu.degree}</strong>, {edu.major} — {edu.university} ({edu.graduation_year})
            </div>
          ))}
        </section>

        <section className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Certifications</h3>
          <ul className="list-disc list-inside">
            {certifications.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">Languages</h3>
          <ul className="list-disc list-inside">
            {languages.map((lang, idx) => (
              <li key={idx}>
                {lang.language} — {lang.proficiency}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ResumeBuilder;
