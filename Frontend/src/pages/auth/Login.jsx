import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() !== "" && password.trim() !== "") {
      localStorage.setItem("clientAuth", "true");
      navigate("/client/dashboard");
    } else {
      alert("Enter email & password");
    }
  };

  return (
    <div className="page">
      <h1>Client Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
