import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RaiseTicket() {

  const navigate = useNavigate();

  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subject || !description || !priority) {
      alert("Please fill all fields");
      return;
    }

    const newTicket = {
      id: Date.now(),
      subject,
      description,
      priority,
      status: "Open"
    };

    const existingTickets =
      JSON.parse(localStorage.getItem("tickets")) || [];

    existingTickets.push(newTicket);

    localStorage.setItem("tickets", JSON.stringify(existingTickets));

    alert("Ticket Submitted Successfully!");

    navigate("/client/dashboard");
  };

  return (
    <div className="client-page">

      <div className="client-header">
        <h1 className="client-title">Raise Support Ticket</h1>
        <button className="client-logout" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>

      <form
        style={{ maxWidth: "500px", marginTop: "40px" }}
        onSubmit={handleSubmit}
      >

        <div className="form-group">
          <label>Subject</label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Select Priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <button className="primary-btn">Submit Ticket</button>

      </form>

    </div>
  );
}