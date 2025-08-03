import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <h1>About Gillespie Physical Therapy</h1>
        <p>Dedicated to your health and wellness journey</p>
      </div>

      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Founded by Joe Gillespie, Gillespie Physical Therapy has been a cornerstone of physical therapy excellence in our community. 
          Our practice combines cutting-edge techniques with personalized care to ensure the best outcomes for our patients.
        </p>
      </section>

      <section className="our-team">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="team-member-image">
              <img src="/images/joe-gillespie.jpg" alt="Joe Gillespie" />
            </div>
            <h3>Joe Gillespie, MS PT</h3>
            <p className="team-member-title">Physical Therapist & Founder</p>
            <p className="team-member-bio">
              Hi, I'm Joe! I've been working in physical therapy for over 25 years, and I've had the privilege of helping everyone from weekend warriors to pro athletes get back on their feet. I got my start at HealthSouth Sports Medicine, rehabbing Miami Dolphins and Heat players after surgery, and I've even worked with the LPGA Tour to keep golfers fit and injury-free. I've got master's degrees in both Physical Therapy and Exercise Physiology from FIU, and I still love learning about how the body moves and heals. When I'm not in the clinic, I'm usually playing tennis, golf, or pickleball—or racing through a triathlon with my wife. I also never miss a chance to catch college football with my friends. Let's work together to get you moving and feeling your best!
            </p>
          </div>

          <div className="team-member">
            <div className="team-member-image">
              <img src="/images/nancy-frey-gillespie.jpg" alt="Nancy Frey-Gillespie" />
            </div>
            <h3>Nancy Frey-Gillespie</h3>
            <p className="team-member-title">General Manager</p>
            <p className="team-member-bio">
              Hi, I'm Nancy! I've spent over 15 years managing investment portfolios for high-net-worth clients at Wall Street firms, and 25 years working in South Florida's luxury residential real estate market. But my real passion lies in wellness—I've been a personal trainer and group fitness coach for over 30 years, helping runners and triathletes live healthier, balanced lives through movement, nutrition, and mental well-being. When I'm not working, you'll find me racing across the country in running, biking, and swimming events...while my husband cheers me on from the sidelines. I believe that investing in your health is just as important as investing in your future, and I'm here to help you thrive in both.
            </p>
          </div>

                     <div className="team-member">
             <div className="team-member-image">
               <img src="/images/jared-grunwald.jpg" alt="Jared Grunwald" />
             </div>
             <h3>Jared Grunwald, PTA</h3>
             <p className="team-member-title">Physical Therapist Assistant</p>
             <p className="team-member-bio">
               Hi I'm Jared and I've been a Physical Therapist Assistant for almost a decade, and I absolutely love helping people feel their best. 
               Before I got into PT, I worked as a personal trainer, so I've always been passionate about movement and helping others reach their goals.

               I believe that movement is medicine, and I'm here to help you get back to doing the things you love. When I'm not at work, 
               you'll probably find me spending time with my family – my favorite thing to do, especially with my daughter. 
               My approach to therapy is pretty simple: "Ain't nothing to it but to do it."

               Let's work together to get you moving and feeling your best!
             </p>
           </div>

           <div className="team-member">
             <div className="team-member-image">
               <img src="/images/np1.jpg" alt="Deana Hicks" />
             </div>
             <h3>Deana Hicks, PTA</h3>
             <p className="team-member-title">Physical Therapy Assistant</p>
             <p className="team-member-bio">
               Bio and picture to be updated at a later date.
             </p>
           </div>

          

          <div className="team-member">
            <div className="team-member-image">
              <img src="/images/Tucker.jpg" alt="Tucker" />
            </div>
            <h3>Tucker</h3>
            <p className="team-member-title">Chief Barketing Officer & Therapy Dog</p>
            <p className="team-member-bio">
              Hi, I'm Tucker! I'm the four-legged member of the Gillespie Physical Therapy team, and I take my job as Chief Barketing Officer very seriously. My main responsibilities include greeting patients with enthusiastic tail wags, providing emotional support during therapy sessions, and ensuring everyone leaves with a smile on their face. I'm a natural at reading people's energy and know exactly when someone needs a gentle nudge or a comforting presence. When I'm not working the clinic floor, you might find me supervising from my favorite spot or taking well-deserved naps. I believe that healing isn't just about physical therapy—it's about creating a warm, welcoming environment where patients feel comfortable and supported. After all, sometimes the best medicine is a friendly face and a wagging tail!
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