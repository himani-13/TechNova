import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/Client.css";

export default function Dashboard() {

  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(storedTickets);
  }, []);

  return (
    <div className="client-page">

      <div className="client-header">
        <h1 className="client-title">Client Dashboard</h1>
        <button className="client-logout" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>

      <h2 className="section-title">Your Projects</h2>

      <div className="card" onClick={() => navigate("/client/project/1")}>
        <h3>CRM Development</h3>
        <p>Status: Active</p>
      </div>

      <div className="card" onClick={() => navigate("/client/project/2")}>
        <h3>Mobile App</h3>
        <p>Status: Completed</p>
      </div>

      <div className="card" onClick={() => navigate("/client/project/3")}>
        <h3>AI Integration</h3>
        <p>Status: Delayed</p>
      </div>

      <h2 className="section-title">Your Support Tickets</h2>

      {tickets.length === 0 ? (
        <p style={{ marginTop: "10px" }}>No tickets raised yet.</p>
      ) : (
        tickets.map(ticket => (
          <div className="card" key={ticket.id}>
            <h3>{ticket.subject}</h3>
            <p>Priority: {ticket.priority}</p>
            <p>Status: {ticket.status}</p>
          </div>
        ))
      )}

    </div>
  );
}