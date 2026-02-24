import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    industry: "",
    service: "",
    budget: "",
    currency: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length !== 8) {
      setError("Password must be exactly 8 characters.");
      return;
    }

    alert("Form Submitted Successfully ✅");
    console.log(formData);
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>

      <p>TechNova Ltd</p>
      <p>124 City Road, London, EC1V 2NX, United Kingdom</p>
      <p>Email: info@technova-uk.com</p>
      <p>Phone: +44 20 7946 0857</p>
      <p>Company Registration No: 14873291</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Create Password (8 characters only)"
          required
          onChange={handleChange}
        />

        {error && <p className="error">{error}</p>}

        <input
          type="text"
          name="country"
          placeholder="Country"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="industry"
          placeholder="Industry"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="service"
          placeholder="Service Interested"
          required
          onChange={handleChange}
        />

        <input
          type="number"
          name="budget"
          placeholder="Estimated Budget"
          required
          onChange={handleChange}
        />

        <select
          name="currency"
          required
          onChange={handleChange}
        >
          <option value="">Select Currency</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>

        <textarea
          name="message"
          placeholder="Your Message"
          required
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}