import { Link } from "react-router-dom";

export default function Careers() {
  const jobs = [
    "Frontend Developer (React / Angular)",
    "Backend Developer (.NET / Node.js)",
    "Salesforce Consultant / Developer",
    "DevOps Engineer",
    "Cloud Architect",
    "Mobile App Developer",
    "UI/UX Designer",
    "QA Automation Engineer",
    "Business Analyst",
    "Cybersecurity Specialist",
  ];

  return (
    <div className="page">
      <h1>Careers at TechNova</h1>

      <p className="intro">We are actively hiring talented professionals:</p>

      <div className="career-grid">
        {jobs.map((job, index) => (
          <div key={index} className="career-card">
            <h3>{job}</h3>

            <Link to="/contact" className="apply-btn">
              Apply Now →
            </Link>
          </div>
        ))}
      </div>

      <p className="note">
        Dynamic listings will be updated as the company expands.
      </p>
    </div>
  );
 }