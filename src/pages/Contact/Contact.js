import React, { useState } from 'react';
import './Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value 
        
    } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setSubmitted(true);
    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      {submitted && (
        <div className="thank-you-message">
          <p>Thank you for contacting us! We will get back to you shortly.</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-details">
        <h2>Our Contact Details</h2>
        <p><strong>Address:</strong> 123 Tribal Handicrafts Lane, Art City, AS 56789</p>
        <p><strong>Email:</strong> contact@tribalhandicrafts.com</p>
        <p><strong>Phone:</strong> +1-234-567-8900</p>
      </div>
    </div>
  );
};

export default ContactPage;
