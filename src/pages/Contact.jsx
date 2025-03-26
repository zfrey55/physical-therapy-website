import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // The form will be handled by Netlify Forms
    // We can still log the data for development purposes
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

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
            <h3>Address</h3>
            <p>123 Wellness Street</p>
            <p>San Francisco, CA 94105</p>
          </div>
          
          <div className="info-item">
            <h3>Phone</h3>
            <p>(555) 123-4567</p>
          </div>
          
          <div className="info-item">
            <h3>Email</h3>
            <p>info@ptwellness.com</p>
          </div>
          
          <div className="info-item">
            <h3>Hours</h3>
            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 1:00 PM</p>
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
            onSubmit={handleSubmit}
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
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="preferredDate">Preferred Appointment Date</label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
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