import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <section className="hero-section">
        <h1>
          Empowering Digital Transformation Through Intelligent Technology
        </h1>

        <p>
          Enterprise-grade web, cloud, CRM, and software solutions engineered
          to accelerate growth and future-proof your business.
        </p>

        <div className="hero-buttons">
          <Link to="/contact" className="btn-primary">
            Get a Consultation
          </Link>

          <Link to="/services" className="btn-secondary">
            Explore Our Services
          </Link>
        </div>
      </section>
    </div>
  );
}