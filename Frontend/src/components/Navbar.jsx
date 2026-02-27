import { NavLink } from "react-router-dom";
import logo from "../assets/technova-logo.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="tn-navbar">
      <div className="tn-navbar-inner">

        <div className="tn-brand">
          <img src={logo} alt="TechNova Logo" className="tn-logo" />
          <div className="tn-brand-text">
            <span className="tn-brand-main">TechNova</span>
            <span className="tn-brand-sub">Engineering Excellence</span>
          </div>
        </div>

        <nav className="tn-menu">
          <NavLink to="/corporate" end className="tn-link">
            Home
          </NavLink>

          <NavLink to="/corporate/about" className="tn-link">
            About
          </NavLink>

          <NavLink to="/corporate/services" className="tn-link">
            Services
          </NavLink>

          <NavLink to="/corporate/industries" className="tn-link">
            Industries
          </NavLink>

          <NavLink to="/corporate/case-studies" className="tn-link">
            Case Studies
          </NavLink>

          <NavLink to="/corporate/careers" className="tn-link">
            Careers
          </NavLink>

          <NavLink to="/corporate/contact" className="tn-link tn-cta">
            Contact
          </NavLink>
        </nav>

      </div>
    </header>
  );
}