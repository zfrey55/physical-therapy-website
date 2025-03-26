import React from 'react'

function About() {
  return (
    <div className="about-page">
      <section className="page-header">
        <h1>About PT Wellness</h1>
        <p>Your trusted partner in physical therapy and rehabilitation</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>Founded in 2010, PT Wellness has been committed to providing exceptional physical therapy services to our community. Our mission is to help patients achieve their optimal physical health through personalized care and evidence-based treatment approaches.</p>
          
          <h2>Our Mission</h2>
          <p>To provide high-quality, patient-centered physical therapy services that empower individuals to achieve their maximum potential and improve their quality of life.</p>
          
          <h2>Our Values</h2>
          <ul>
            <li>Patient-Centered Care</li>
            <li>Clinical Excellence</li>
            <li>Professional Integrity</li>
            <li>Continuous Learning</li>
            <li>Community Engagement</li>
          </ul>
        </div>

        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <h3>Dr. Sarah Johnson</h3>
              <p className="title">Lead Physical Therapist</p>
              <p className="bio">With over 15 years of experience, Dr. Johnson specializes in sports rehabilitation and orthopedic conditions.</p>
            </div>

            <div className="team-member">
              <h3>Dr. Michael Chen</h3>
              <p className="title">Physical Therapist</p>
              <p className="bio">Dr. Chen focuses on geriatric care and balance disorders, helping seniors maintain their independence.</p>
            </div>

            <div className="team-member">
              <h3>Dr. Emily Rodriguez</h3>
              <p className="title">Physical Therapist</p>
              <p className="bio">Specializing in workplace injuries and ergonomics, Dr. Rodriguez helps patients prevent and recover from work-related conditions.</p>
            </div>
          </div>
        </div>

        <div className="facility-section">
          <h2>Our Facility</h2>
          <p>Our modern facility is equipped with state-of-the-art equipment and comfortable treatment spaces. We offer:</p>
          <ul>
            <li>Private treatment rooms</li>
            <li>Open gym area</li>
            <li>Hydrotherapy pool</li>
            <li>Modern exercise equipment</li>
            <li>Comfortable waiting area</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default About 