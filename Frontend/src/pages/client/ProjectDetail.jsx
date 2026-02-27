import { useNavigate, useParams } from "react-router-dom";

export default function ProjectDetail() {

  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="client-page">

      <div className="client-header">
        <h1 className="client-title">Project Detail</h1>
        <button 
          className="client-logout"
          onClick={() => navigate("/")}
        >
          Logout
        </button>
      </div>

      <div className="card" style={{ marginTop: "40px" }}>
        <h2>Project ID: {id}</h2>
        <p className="status">Status: Active</p>
        <p className="status">Progress: 60% Completed</p>
      </div>

      <h2 className="section-title">Documents</h2>

      <div className="card">
        <ul style={{ lineHeight: "2" }}>
          <li>📄 Requirement.pdf</li>
          <li>📄 Design.pdf</li>
        </ul>
      </div>

      <button 
        className="primary-btn"
        style={{ marginTop: "20px" }}
        onClick={() => navigate("/client/ticket")}
      >
        Raise Support Ticket
      </button>

    </div>
  );
}