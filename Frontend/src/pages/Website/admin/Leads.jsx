import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Leads() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const isAdmin = localStorage.getItem("adminAuth");
    if (!isAdmin) {
      navigate("/admin/login");
      return;
    }

    let storedLeads = JSON.parse(localStorage.getItem("adminLeads"));

    if (!storedLeads || storedLeads.length === 0) {
      storedLeads = [
        {
          id: 1,
          name: "Himanshi Patel",
          email: "himanshi@gmail.com",
          service: "Web Development",
          status: "New"
        },
        {
          id: 2,
          name: "Rohan Shah",
          email: "rohan@gmail.com",
          service: "Mobile App",
          status: "New"
        }
      ];

      localStorage.setItem("adminLeads", JSON.stringify(storedLeads));
    }

    setLeads(storedLeads);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/");
  };

  const convertLead = (lead) => {
    const updatedLeads = leads.map((l) =>
      l.id === lead.id ? { ...l, status: "Converted" } : l
    );

    setLeads(updatedLeads);
    localStorage.setItem("adminLeads", JSON.stringify(updatedLeads));

    const storedProjects =
      JSON.parse(localStorage.getItem("adminProjects")) || [];

    const newProject = {
      id: Date.now(),
      name: lead.name,
      email: lead.email,
      service: lead.service,
      status: "Active"
    };

    const updatedProjects = [...storedProjects, newProject];

    localStorage.setItem(
      "adminProjects",
      JSON.stringify(updatedProjects)
    );

    navigate("/admin/projects");
  };

  return (
    <div className="admin-page">

      <div className="admin-header">
        <h1>Leads Management</h1>
        <button className="admin-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="admin-card">

        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Service</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.service}</td>

                <td
                  className={
                    lead.status === "Converted"
                      ? "status-converted"
                      : "status-remaining"
                  }
                >
                  {lead.status}
                </td>

                <td>
                  {lead.status === "New" ? (
                    <button
                      className="convert-btn"
                      onClick={() => convertLead(lead)}
                    >
                      Convert Lead →
                    </button>
                  ) : (
                    <button
                      className="convert-btn"
                      onClick={() => navigate("/admin/projects")}
                    >
                      View Project →
                    </button>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}