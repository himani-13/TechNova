export default function Careers() {
  const jobs = [
    "Frontend Developer",
    "Backend Developer",
    "Salesforce Consultant",
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

      <div className="grid">
        {jobs.map((job, index) => (
          <div key={index} className="card">
            <h3>{job}</h3>
            <button>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}