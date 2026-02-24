import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="tn-navbar">
      <div className="tn-navbar-inner">

        
        <div className="tn-brand">
          <span className="tn-brand-main">TechNova</span>
          <span className="tn-brand-sub">Engineering Excellence</span>
        </div>

        
        <nav className="tn-menu">
          <NavLink to="/" end className="tn-link">
            Home
          </NavLink>
          <NavLink to="/about" className="tn-link">
            About
          </NavLink>
          <NavLink to="/services" className="tn-link">
            Services
          </NavLink>
          <NavLink to="/industries" className="tn-link">
            Industries
          </NavLink>
          <NavLink to="/case-studies" className="tn-link">
            Case Studies
          </NavLink>
          <NavLink to="/careers" className="tn-link">
            Careers
          </NavLink>

          <NavLink to="/contact" className="tn-link tn-cta">
            Contact
          </NavLink>
        </nav>

      </div>
    </header>
  );
}