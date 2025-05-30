import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Gillespie Therapy</h1>
        <p>Your journey to better health starts here</p>
        <Link to="/contact" className="cta-button">Book an Appointment</Link>
      </section>

      <section className="services-preview">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Physical Therapy</h3>
            <p>Comprehensive rehabilitation and recovery programs</p>
          </div>
          <div className="service-card">
            <h3>Sports Injury</h3>
            <p>Specialized treatment for athletes and sports-related injuries</p>
          </div>
          <div className="service-card">
            <h3>Pain Management</h3>
            <p>Effective solutions for chronic and acute pain</p>
          </div>
        </div>
        <Link to="/services" className="view-all-button">View All Services</Link>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Gillespie Therapy?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Expert Care</h3>
            <p>Licensed and experienced physical therapists</p>
          </div>
          <div className="feature">
            <h3>Personalized Treatment</h3>
            <p>Customized plans for your specific needs</p>
          </div>
          <div className="feature">
            <h3>Modern Facility</h3>
            <p>State-of-the-art equipment and treatment rooms</p>
          </div>
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