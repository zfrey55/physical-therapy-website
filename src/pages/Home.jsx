import React from 'react'
import { Link } from 'react-router-dom'
import Slideshow from '../components/Slideshow'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <Slideshow />
        <div className="hero-content">
          <h1>Welcome to Gillespie Therapy</h1>
          <p>Your journey to better health and wellness starts here</p>
          <Link to="/contact" className="cta-button">Book an Appointment</Link>
        </div>
      </div>

      <section className="services-preview">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Physical Therapy</h3>
            <p>Personalized treatment plans to help you recover from injuries and improve mobility.</p>
          </div>
          <div className="service-card">
            <h3>Sports Rehabilitation</h3>
            <p>Specialized care for athletes to get back to peak performance.</p>
          </div>
          <div className="service-card">
            <h3>Wellness Programs</h3>
            <p>Comprehensive programs to maintain and improve your overall health.</p>
          </div>
        </div>
        <Link to="/services" className="view-all-button">View All Services</Link>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Gillespie Therapy?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Expert Care</h3>
            <p>Our team of experienced therapists provides personalized care tailored to your needs.</p>
          </div>
          <div className="feature">
            <h3>Modern Facility</h3>
            <p>State-of-the-art equipment and comfortable treatment spaces for optimal recovery.</p>
          </div>
          <div className="feature">
            <h3>Proven Results</h3>
            <p>Track record of successful patient outcomes and positive testimonials.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Patients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"The team at Gillespie Therapy helped me recover from my sports injury faster than I expected. Their expertise and dedication are unmatched."</p>
            <cite>- Sarah M.</cite>
          </div>
          <div className="testimonial-card">
            <p>"After my surgery, the rehabilitation program at Gillespie Therapy was crucial to my recovery. I'm grateful for their support and guidance."</p>
            <cite>- John D.</cite>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Start Your Journey to Better Health</h2>
        <p>Take the first step towards a healthier, more active lifestyle. Contact us today to schedule your appointment.</p>
        <Link to="/contact" className="cta-button">Book an Appointment</Link>
      </section>
    </div>
  )
}

export default Home 