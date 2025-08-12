import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Gillespie and Associates Physical Therapy</h4>
          <p>Your journey to better health starts here</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Phone: (561) 955-9384</p>
          <p>Email: gillespietherapy@gmail.com</p>
        </div>
        <div className="footer-section">
          <h4>Hours</h4>
          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
          <p>Saturday: By appointment only</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Gillespie and Associates Physical Therapy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 