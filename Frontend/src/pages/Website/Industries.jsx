export default function Industries() {
  const industries = [
    "Retail & E-Commerce",
    "Financial Services",
    "Healthcare",
    "Education",
    "Logistics & Supply Chain",
    "SaaS & Technology",
    "Manufacturing",
    "Professional Services",
  ];

  return (
    <div className="page">
      <h1 className="industry-title">Industries We Serve</h1>

      <div className="industry-grid">
        {industries.map((industry, index) => (
          <div key={index} className="industry-card">
            {industry}
          </div>
        ))}
      </div>
    </div>
  );
}