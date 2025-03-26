import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <nav className="nav">
            <div className="logo">PT Wellness</div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>PT Wellness</h4>
              <p>Your journey to better health starts here</p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@ptwellness.com</p>
            </div>
            <div className="footer-section">
              <h4>Hours</h4>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 PT Wellness. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App 