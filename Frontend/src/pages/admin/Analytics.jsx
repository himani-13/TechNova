import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer
} from "recharts";

import "../../styles/Admin.css";

export default function Analytics() {

  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("adminAuth");
    if (!isAdmin) navigate("/");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/");
  };

  const projects =
    JSON.parse(localStorage.getItem("adminProjects")) || [];

  const totalLeads = 3;
  const totalProjects = projects.length;

  const activeProjects =
    projects.filter(p => p.status === "Active").length;

  const remainingProjects =
    projects.filter(p => p.status === "Remaining").length;

  const conversionRate =
    totalLeads === 0
      ? 0
      : Math.round((totalProjects / totalLeads) * 100);

  const barData = [
    { name: "Leads", value: totalLeads },
    { name: "Active", value: activeProjects },
    { name: "Remaining", value: remainingProjects }
  ];

  const pieData = [
    { name: "Active Projects", value: activeProjects },
    { name: "Remaining Projects", value: remainingProjects }
  ];

  const COLORS = ["#10b981", "#f59e0b"];

  return (
    <div className="admin-page">

      <div className="admin-header">
        <h1>Analytics Dashboard</h1>
        <button className="admin-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="analytics-grid">
        <div className="admin-card">
          <h3>Total Leads</h3>
          <p>{totalLeads}</p>
        </div>

        <div className="admin-card">
          <h3>Total Projects</h3>
          <p>{totalProjects}</p>
        </div>

        <div className="admin-card">
          <h3>Conversion Rate</h3>
          <p>{conversionRate}%</p>
        </div>
      </div>

      <div className="charts-container">

        <div className="admin-card" style={{ width: "50%", height: "350px" }}>
          <h3>Project Distribution</h3>

          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                <Cell fill="#3b82f6" />
                <Cell fill="#10b981" />
                <Cell fill="#f59e0b" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="admin-card" style={{ width: "50%", height: "350px" }}>
          <h3>Project Status Overview</h3>

          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={110}
                innerRadius={60}
                paddingAngle={4}
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>

        </div>
      </div>

    </div>
  );
}