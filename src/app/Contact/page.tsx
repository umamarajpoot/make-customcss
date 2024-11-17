import React from 'react';
import '../style/contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h2>Get In Touch!</h2>
          <p>Fill up the form and our team will get back to you within 24 hours.</p>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i> Piazza Napoleone, Lucca, Tuscany
            </li>
            <li>
              <i className="fas fa-phone"></i> +39 346 348 9708
            </li>
            <li>
              <i className="fas fa-envelope"></i> italianinfo@gmail.com
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name and Surname</label>
            <input type="text" id="name" placeholder="Enter your name and surname" />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email address" />

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Enter your Message"></textarea>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      {/* Real Map Section */}
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.6413060116394!2d10.500490815497578!3d43.84334157911551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a59e23dc2ea41%3A0x767ba1ddbf3654a5!2sPiazza%20Napoleone%2C%2055112%20Lucca%20LU%2C%20Italy!5e0!3m2!1sen!2sus!4v1697743425938!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: '10px' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
