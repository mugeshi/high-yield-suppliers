import React, { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const images = [
    "https://www.njc.edu/sites/default/files/areaofstudy/banner/banner-agribusiness-073119.jpg",
  ];

  // Define state variables to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send form data to the server or perform other actions
      console.log("Form submitted:", formData);
      // Optionally, reset form fields after submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contactDetails}>
        <div className={styles.hero}>
          <img className={styles.heroImage} src={images[0]} alt="Hero" />
          <div className={styles.heroContent}>
            <h2>Contact Us</h2>
          </div>
        </div>
        <h2 className={styles.h2Content}>LOCATION</h2>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.70610533076!2d36.75295137415271!3d-1.3528994986342895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f05397e28212f%3A0x14f4c892c8c8e32d!2sBogani%20E%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1713242504946!5m2!1sen!2ske"
            width="600" 
            height="500" 
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Embedded Map"
          ></iframe>
        </div>

        <div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2 style={{ marginRight: "10px", padding: "50px" }}>
              GET IN TOUCH
            </h2>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

