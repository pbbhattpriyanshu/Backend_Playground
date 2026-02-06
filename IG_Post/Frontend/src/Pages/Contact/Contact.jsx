import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p className="contact-subtitle">
          We’d love to hear from you. Please fill out the form below.
        </p>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
