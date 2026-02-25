import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");  
  };

  return (
    <header className="tn-navbar">
      <div className="tn-navbar-inner">

        <div className="tn-brand">
          <span className="tn-brand-main">TechNova</span>
          <span className="tn-brand-sub">Engineering Excellence</span>
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

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>

        </nav>

      </div>
    </header>
  );
}