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
          {/* Add your map embed code here */}
          <p>Interactive map will be displayed here</p>
        </div>
      </section>
    </div>
  );
};

export default Locations; 