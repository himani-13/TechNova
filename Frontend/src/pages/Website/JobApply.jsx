import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function JobApply() {
  const { role } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const stored =
      JSON.parse(localStorage.getItem("jobApplications")) || [];

    const newApp = {
      id: Date.now(),
      role,
      name: form.name,
      email: form.email
    };

    localStorage.setItem(
      "jobApplications",
      JSON.stringify([newApp, ...stored])
    );

    alert("Job application submitted successfully!");
    navigate("/corporate/careers");
  };

  return (
    <div className="page">
      <h1>Apply for {role}</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
        <input placeholder="Full Name" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input placeholder="Email" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <button className="btn-primary">Submit Application</button>
      </form>
    </div>
  );
}