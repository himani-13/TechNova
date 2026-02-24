export default function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>

      <p>TechNova Ltd</p>
      <p>124 City Road, London, EC1V 2NX, United Kingdom</p>
      <p>Email: info@technova-uk.com</p>
      <p>Phone: +44 20 7946 0857</p>
      <p>Company Registration No: 14873291</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}