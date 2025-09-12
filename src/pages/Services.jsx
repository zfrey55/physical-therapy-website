import React from 'react'

function Services() {
  return (
    <div className="services-page" id="top">
      <section className="page-header">
        <h1>Our Services</h1>
        <p>Comprehensive physical therapy solutions for your needs</p>
      </section>

      <section className="services-grid">
        <div className="service-card">
          <h3>Physical Therapy</h3>
          <p>Comprehensive physical therapy treatments for various conditions including:</p>
          <ul>
            <li>Post-surgery rehabilitation</li>
            <li>Chronic pain management</li>
            <li>Strength and conditioning</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Sports Rehabilitation</h3>
          <p>Specialized care for athletes and sports-related injuries:</p>
          <ul>
            <li>Sports injury recovery</li>
            <li>Performance enhancement</li>
            <li>Injury prevention programs</li>
            <li>Return to sport protocols</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Pain Management</h3>
          <p>Effective pain relief and management techniques:</p>
          <ul>
            <li>Manual therapy</li>
            <li>Ultrasound therapy</li>
            <li>Electrical stimulation</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Geriatric Care</h3>
          <p>Specialized physical therapy for older adults:</p>
          <ul>
            <li>Fall prevention</li>
            <li>Joint replacement recovery</li>
            <li>Mobility enhancement</li>
            <li>Balance training</li>
          </ul>
        </div>



        <div className="service-card">
          <h3>Balance and Gait Training</h3>
          <p>Specialized training to improve balance and walking ability:</p>
          <ul>
            <li>Balance rehabilitation</li>
            <li>Fall prevention</li>
            <li>Gait analysis and training</li>
            <li>Mobility enhancement</li>
          </ul>
        </div>
      </section>

      <section className="insurance-info">
        <h2>Insurance & Payment</h2>
        <p>Medicare accepted, some private insurances accepted. Please include your insurance information with your contact form.</p>
      </section>
    </div>
  )
}

export default Services 