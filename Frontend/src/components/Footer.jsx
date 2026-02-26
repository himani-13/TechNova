import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3>TechNova Ltd</h3>
          <p>
            124 City Road, London<br />
            EC1V 2NX, United Kingdom
          </p>
          <p>Email: info@technova-uk.com</p>
          <p>Phone: +44 20 7946 0857</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/corporate">Home</Link>
            </li>
            <li>
              <Link to="/corporate/about">About</Link>
            </li>
            <li>
              <Link to="/corporate/services">Services</Link>
            </li>
            <li>
              <Link to="/corporate/industries">Industries</Link>
            </li>
            <li>
              <Link to="/corporate/case-studies">Case Studies</Link>
            </li>
            <li>
              <Link to="/corporate/careers">Careers</Link>
            </li>
            <li>
              <Link to="/corporate/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Custom Web Development</li>
            <li>Enterprise Software</li>
            <li>Cloud Migration</li>
            <li>Salesforce CRM</li>
            <li>DevOps & Automation</li>
            <li>Cybersecurity</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="#">Cookie Policy</Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} TechNova Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}