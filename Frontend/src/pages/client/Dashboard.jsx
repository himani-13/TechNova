import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() !== "" && password.trim() !== "") {
      navigate("/client/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="page">

      <div style={{
        maxWidth: "400px",
        margin: "100px auto",
        padding: "30px",
        border: "1px solid #ccc",
        borderRadius: "8px"
      }}>

        <h1 style={{ textAlign: "center" }}>Client Login</h1>

        <form onSubmit={handleLogin}>

          <div style={{ marginBottom: "15px" }}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: "#22c55e",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Login
          </button>

        </form>

        <br />

        <button
          onClick={() => navigate("/")}
          style={{
            width: "100%",
            padding: "8px",
            background: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Back to Main Portal
        </button>

      </div>

    </div>
  );
}