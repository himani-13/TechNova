import { useNavigate } from "react-router-dom";
import "../index.css";

export default function MainPortal() {
  const navigate = useNavigate();

  return (
    <div className="portal-container">
      <div className="portal-card">
        <h1>Welcome to TechNova System</h1>
        <p>Select the portal you want to access</p>

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
  );
}