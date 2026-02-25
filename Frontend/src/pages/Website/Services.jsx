import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";

export default function Services() {
  const services = [
    {
      title: "Custom Web Development",
      description:
        "We build scalable, secure and high-performance web applications tailored to your business needs. Our solutions include responsive websites, enterprise portals, SaaS platforms, and full-stack development using modern technologies."
    },
    {
      title: "Mobile App Development",
      description:
        "We design and develop intuitive mobile applications for iOS and Android platforms with strong backend integration, performance optimization, and enterprise-level security."
    },
    {
      title: "API Development & Integration",
      description:
        "We create secure RESTful APIs and enable seamless integrations including payment gateways, CRM systems, and cloud platforms for scalable operations."
    },
    {
      title: "Cybersecurity & Data Protection",
      description:
        "We protect enterprise systems with advanced security architecture, encryption, vulnerability testing, and continuous monitoring."
    }
  ];

  return (
    <div className="page">
      <h1>Our Services</h1>

      <div className="services-container">

        <div className="services-content">
          {services.map((service, index) => (
            <div key={index} className="card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-videos">

          <video
            src={video1}
            autoPlay
            loop
            muted
            playsInline
            className="service-video"
          />

          <video
            src={video2}
            autoPlay
            loop
            muted
            playsInline
            className="service-video"
          />

          <video
            src={video3}
            autoPlay
            loop
            muted
            playsInline
            className="service-video"
          />

        </div>

      </div>
    </div>
  );
}
