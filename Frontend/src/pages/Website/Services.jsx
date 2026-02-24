export default function Services() {
  const services = [
    "Custom Web Development",
    "Enterprise Software Development",
    "Mobile App Development",
    "Salesforce Consulting & CRM",
    "Cloud Architecture & Migration",
    "DevOps & CI/CD Automation",
    "API Development & Integration",
    "E-Commerce Development",
    "UI/UX Design & Product Strategy",
    "Cybersecurity & Data Protection",
  ];

  return (
    <div className="page">
      <h1>Our Services</h1>

      <div className="grid">
        {services.map((service, index) => (
          <div key={index} className="card">
            <h3>{service}</h3>
            <p>
              Scalable, secure and performance-driven solutions tailored to
              enterprise business goals.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
 }
