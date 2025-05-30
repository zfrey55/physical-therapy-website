import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Gillespie Therapy</h1>
        <p>Dedicated to your health and wellness journey</p>
      </section>

      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          At Gillespie Therapy, we believe in providing exceptional physical therapy care
          that helps our patients achieve their health and wellness goals. Our team of
          experienced therapists is committed to delivering personalized treatment plans
          that address your unique needs.
        </p>
      </section>

      <section className="our-team">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <h3>Dr. Sarah Gillespie</h3>
            <p>Lead Physical Therapist</p>
            <p>Specializing in sports rehabilitation and injury prevention</p>
          </div>
          <div className="team-member">
            <h3>Dr. Michael Chen</h3>
            <p>Physical Therapist</p>
            <p>Expert in chronic pain management and recovery</p>
          </div>
          <div className="team-member">
            <h3>Dr. Emily Rodriguez</h3>
            <p>Physical Therapist</p>
            <p>Specializing in geriatric care and mobility</p>
          </div>
        </div>
      </section>

      <section className="our-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value">
            <h3>Excellence</h3>
            <p>Committed to providing the highest quality care</p>
          </div>
          <div className="value">
            <h3>Compassion</h3>
            <p>Understanding and addressing your unique needs</p>
          </div>
          <div className="value">
            <h3>Innovation</h3>
            <p>Utilizing the latest techniques and technology</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 