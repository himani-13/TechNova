
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "password" && value.length > 8) return;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
    alert("Form submitted successfully");

    setForm({
      name: "",
      email: "",
      password: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-wrapper">

        <div className="contact-info-panel">
          <h2>Contact Us</h2>
          <p>
            Please fill the form and our team will contact you shortly.
          </p>

          <div className="contact-meta">
            <div>
              <span>Email</span>
              <p>info@technova.com</p>
            </div>
            <div>
              <span>Phone</span>
              <p>+91 98765 43210</p>
            </div>
            <div>
              <span>Location</span>
              <p>Ahmedabad, India</p>
            </div>
          </div>
        </div>

        <div className="contact-form-panel">

          <div className="form-header">
            <h3>Send your enquiry</h3>
            <p>All fields are confidential</p>
          </div>

          <form className="pro-form" onSubmit={handleSubmit}>

            <div className="form-grid">

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password (max 8 characters)</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  maxLength={8}
                  required
                />
              </div>

              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Service</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Cloud & DevOps</option>
                  <option>AI & Automation</option>
                  <option>UI / UX Design</option>
                </select>
              </div>

              <div className="form-group">
                <label>Budget</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                >
                  <option value=""></option>
                  <option>Below 50,000</option>
                  <option>50,000 – 2,00,000</option>
                  <option>2,00,000 – 5,00,000</option>
                  <option>Above 5,00,000</option>
                </select>
              </div>

            </div>

            <div className="form-group full">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
