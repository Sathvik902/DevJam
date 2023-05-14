import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "./Contact.css";

function Contact() { 
  return (
    <div className="contact-container">
      <h2 className="contact-header">Contact Us</h2>
      <div className="contact-info">
        <div className="contact-card">
          <FaMapMarkerAlt className="icon" />
          <p>123 Main St, Anytown USA</p>
        </div>
        <div className="contact-card">
          <FaEnvelope className="icon" />
          <p>info@example.com</p>
        </div>
        <div className="contact-card">
          <FaPhone className="icon" />
          <p>(555) 555-5555</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
