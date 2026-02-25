import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Admin.css";

export default function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    localStorage.setItem("adminAuth", "true");

    navigate("/admin/leads");
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h2>Admin Login</h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Login →
          </button>

        </form>

      </div>

    </div>
  );
}