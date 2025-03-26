import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to PT Wellness</h1>
        <p>Your journey to better health starts here</p>
        <Link to="/contact" className="cta-button">Schedule Appointment</Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Expert Care</h3>
          <p>Our licensed physical therapists have years of experience treating various conditions.</p>
        </div>
        <div className="feature-card">
          <h3>Personalized Treatment</h3>
          <p>We create custom treatment plans tailored to your specific needs and goals.</p>
        </div>
        <div className="feature-card">
          <h3>Modern Facility</h3>
          <p>State-of-the-art equipment and comfortable treatment spaces.</p>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Patients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"PT Wellness helped me recover from my sports injury faster than I expected. The staff is professional and caring."</p>
            <cite>- Sarah M., Athlete</cite>
          </div>
          <div className="testimonial-card">
            <p>"After my surgery, the physical therapy program at PT Wellness was crucial to my recovery. Highly recommended!"</p>
            <cite>- John D., Patient</cite>
          </div>
          <div className="testimonial-card">
            <p>"The personalized attention and expertise of the therapists made all the difference in my rehabilitation journey."</p>
            <cite>- Emily R., Patient</cite>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Start Your Recovery Journey?</h2>
        <p>Contact us today to schedule your first appointment</p>
        <Link to="/contact" className="cta-button">Get Started</Link>
      </section>
    </div>
  )
}

export default Home 