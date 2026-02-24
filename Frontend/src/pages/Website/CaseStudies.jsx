import { Link } from "react-router-dom";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: "retail",
      title: "Retail E-Commerce Transformation",
      result: "45% revenue growth within 8 months",
    },
    {
      id: "crm",
      title: "Financial CRM Automation",
      result: "35% improvement in client response time",
    },
    {
      id: "healthcare",
      title: "Healthcare Digital Portal",
      result: "30% operational efficiency improvement",
    },
    {
      id: "cloud",
      title: "Cloud Migration Initiative",
      result: "28% infrastructure cost reduction",
    },
    {
      id: "ai",
      title: "AI-Based Automation Deployment",
      result: "55% support workload reduction",
    },
  ];

  return (
    <div className="page">
      <h1>Case Study Highlights</h1>

      <div className="case-grid">
        {caseStudies.map((study) => (
          <div key={study.id} className="case-card">
            <h3>{study.title}</h3>
            <p>{study.result}</p>

            <Link to={`/case-studies/${study.id}`} className="view-btn">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}