import { Link } from "react-router-dom";

const caseData = [
  { id: 1, title: "Retail E-Commerce", result: "45% Revenue Growth" },
  { id: 2, title: "Financial CRM Automation", result: "35% Faster Response" },
  { id: 3, title: "Healthcare Portal", result: "30% Efficiency Increase" },
  { id: 4, title: "Cloud Migration", result: "28% Cost Savings" },
];

export default function CaseStudies() {
  return (
    <div className="page">
      <h1>Case Studies</h1>

      <div className="grid">
        {caseData.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <p>{item.result}</p>
            <Link to={`/case-studies/${item.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}