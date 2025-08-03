import React from 'react';
import './Locations.css';

const Locations = () => {
  return (
    <div className="locations-page">
      <section className="page-header">
        <h1>Our Locations</h1>
        <p>Convenient physical therapy services across South Florida</p>
      </section>

      <section className="locations-grid">
        <div className="location-card">
          <h3>The Polo Club at Boca Raton</h3>
          <div className="location-info">
            <p className="address">5400 Champion Blvd</p>
            <p className="city">Boca Raton, FL 33496</p>
          </div>
          <div className="contact-info">
            <p><strong>Email:</strong> gillespietherapy@gmail.com</p>
            <p><strong>Phone:</strong> (561) 955-9384</p>
          </div>
        </div>

        <div className="location-card">
          <h3>Mizner Country Club</h3>
          <div className="location-info">
            <p className="address">16104 Mizner Club Drive</p>
            <p className="city">Delray Beach, FL 33446</p>
          </div>
          <div className="contact-info">
            <p><strong>Email:</strong> gillespietherapy@gmail.com</p>
            <p><strong>Phone:</strong> (561) 955-9384</p>
          </div>
        </div>

        <div className="location-card">
          <h3>Boca Pointe</h3>
          <div className="location-info">
            <p className="address">6909 SW 18th St, Ste A114</p>
            <p className="city">Boca Raton, FL 33433</p>
          </div>
          <div className="contact-info">
            <p><strong>Email:</strong> gillespietherapy@gmail.com</p>
            <p><strong>Phone:</strong> (561) 955-9384</p>
          </div>
        </div>
      </section>

      <section className="map-section">
        <h2>Find Us</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.5!2d-80.1!3d26.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d5c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5!2sThe+Polo+Club+at+Boca+Raton!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gillespie Physical Therapy Locations"
          ></iframe>
          <div className="map-info">
            <p><strong>Our Locations:</strong></p>
            <ul>
              <li>The Polo Club at Boca Raton - 5400 Champion Blvd, Boca Raton FL 33496</li>
              <li>Mizner Country Club - 16104 Mizner Club Drive, Delray Beach FL 33446</li>
              <li>Boca Pointe - 6909 SW 18th St, Ste A114, Boca Raton FL 33433</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations; 