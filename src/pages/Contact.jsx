import React from 'react'

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us to schedule an appointment or ask questions</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>

          
          <div className="info-item">
            <h3>Phone</h3>
            <p>(561) 955-9384</p>
          </div>
          
          <div className="info-item">
            <h3>Email</h3>
            <p>gillespietherapy@gmail.com</p>
          </div>
          
          <div className="info-item">
            <h3>Hours</h3>
            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p>Saturday: By appointment only</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send us a Message</h2>
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field" 
            className="contact-form"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </p>
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(555) 555-5555"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="primaryInsurance">Primary Insurance</label>
              <input
                type="text"
                id="primaryInsurance"
                name="primaryInsurance"
                placeholder="e.g., Medicare, Blue Cross, Aetna"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="preferredDate">Preferred Appointment Date</label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-button"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="map-section">
        <h2>Find Us</h2>
        <div className="map-container">
          {/* Add your map embed code here */}
          <p>Map will be displayed here</p>
        </div>
      </section>
    </div>
  )
}

export default Contact 