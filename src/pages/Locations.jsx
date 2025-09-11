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
            src="https://www.google.com/maps/d/embed?mid=10qRxfft8VhL3CtG5B-dCPyQoF6Eqjf4&ehbc=2E312F"
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