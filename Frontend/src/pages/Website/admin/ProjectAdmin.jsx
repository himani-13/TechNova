import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProjectsAdmin() {

  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const isAdmin = localStorage.getItem("adminAuth");
    if (!isAdmin) navigate("/");

    const stored =
      JSON.parse(localStorage.getItem("adminProjects")) || [];

    setProjects(stored);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/");
  };

  const toggleStatus = (id) => {
    const updated = projects.map((p) =>
      p.id === id
        ? {
            ...p,
            status:
              p.status === "Active"
                ? "Remaining"
                : "Active"
          }
        : p
    );

    setProjects(updated);
    localStorage.setItem(
      "adminProjects",
      JSON.stringify(updated)
    );
  };

  const deleteProject = (id) => {
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated);
    localStorage.setItem(
      "adminProjects",
      JSON.stringify(updated)
    );
  };

  return (
    <div className="admin-page">

      <div className="admin-header">
        <h1>Projects Management</h1>
        <button className="admin-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="admin-card">

        <table className="admin-table">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Email</th>
              <th>Service</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.email}</td>
                <td>{project.service}</td>

                <td
                  style={{
                    color:
                      project.status === "Active"
                        ? "#10b981"
                        : "#f59e0b"
                  }}
                >
                  {project.status}
                </td>

                <td>
                  <button
                    className="action-btn mark-btn"
                    onClick={() => toggleStatus(project.id)}
                  >
                    {project.status === "Active"
                      ? "Mark Remaining"
                      : "Mark Active"}
                  </button>

                  <button
                    className="action-btn delete-btn"
                    onClick={() => deleteProject(project.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: "35px", textAlign: "center" }}>
          <button
            className="analytics-btn"
            onClick={() => navigate("/admin/analytics")}
          >
            View Analytics Dashboard →
          </button>
        </div>

      </div>
    </div>
  );
}