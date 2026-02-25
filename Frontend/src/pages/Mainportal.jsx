import { useNavigate } from "react-router-dom";
import "./MainPortal.css";

export default function MainPortal() {
  const navigate = useNavigate();

  return (
    <div className="portal-container">
      <div className="portal-card">
        <h1 className="portal-title">Welcome to TechNova System</h1>
        <p className="portal-subtitle">
          Select the portal you want to access
        </p>

        <div className="portal-buttons">

          <button
  className="portal-btn corporate"
  onClick={() => navigate("/corporate")}
>
  Corporate Website
</button>

          <button
            className="portal-btn client"
            onClick={() => navigate("/client/login")}
          >
            Client Portal
          </button>

          <button
            className="portal-btn admin"
            onClick={() => navigate("/admin/login")}
          >
            Admin Panel
          </button>

        </div>
      </div>
    </div>
  );
}