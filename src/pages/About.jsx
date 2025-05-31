import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <h1>About Gillespie Therapy</h1>
        <p>Dedicated to your health and wellness journey</p>
      </div>

      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Founded by Joe Gillespie, Gillespie Therapy has been a cornerstone of physical therapy excellence in our community. 
          Our practice combines cutting-edge techniques with personalized care to ensure the best outcomes for our patients.
        </p>
      </section>

      <section className="our-team">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="team-member-image">
              <img src="/images/np1.jpg" alt="Joe Gillespie" />
            </div>
            <h3>Joe Gillespie, DPT</h3>
            <p className="team-member-title">Physical Therapist & Founder</p>
            <p className="team-member-bio">
              With over 15 years of experience in physical therapy, Joe Gillespie leads our practice with expertise and dedication. 
              His passion for helping patients achieve their optimal physical health has made him a trusted name in the community.
            </p>
          </div>

          <div className="team-member">
            <div className="team-member-image">
              <img src="/images/np1.jpg" alt="Nurse Practitioner" />
            </div>
            <h3>Dr. Sarah Chen, NP</h3>
            <p className="team-member-title">Nurse Practitioner</p>
            <p className="team-member-bio">
              Specializing in sports medicine and rehabilitation, Dr. Chen brings extensive experience in treating athletic injuries 
              and helping patients return to peak performance.
            </p>
          </div>

          <div className="team-member">
            <div className="team-member-image">
              <img src="/images/np2.jpg" alt="Nurse Practitioner" />
            </div>
            <h3>Dr. Michael Rodriguez, NP</h3>
            <p className="team-member-title">Nurse Practitioner</p>
            <p className="team-member-bio">
              With a focus on chronic pain management and recovery, Dr. Rodriguez helps patients develop long-term strategies 
              for maintaining their physical health and well-being.
            </p>
          </div>

          <div className="team-member">
            <div className="team-member-image">
              <img src="/images/np3.jpg" alt="Nurse Practitioner" />
            </div>
            <h3>Dr. Emily Thompson, NP</h3>
            <p className="team-member-title">Nurse Practitioner</p>
            <p className="team-member-bio">
              Specializing in geriatric care and mobility enhancement, Dr. Thompson is dedicated to helping older adults 
              maintain their independence and quality of life through targeted physical therapy.
            </p>
          </div>
        </div>
      </section>

      <section className="our-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value">
            <h3>Excellence</h3>
            <p>We maintain the highest standards of care and continuously update our knowledge and techniques.</p>
          </div>
          <div className="value">
            <h3>Compassion</h3>
            <p>We treat each patient with understanding and empathy, recognizing their unique needs and goals.</p>
          </div>
          <div className="value">
            <h3>Innovation</h3>
            <p>We embrace new technologies and methods to provide the most effective treatment options.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 