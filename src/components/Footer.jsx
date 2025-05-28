import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Gillespie Therapy</h4>
          <p>Your journey to better health starts here</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@gillespietherapy.com</p>
        </div>
        <div className="footer-section">
          <h4>Hours</h4>
          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 1:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Gillespie Therapy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 