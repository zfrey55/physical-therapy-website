import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PhysicalTherapy",
          "name": "[Your Practice Name]",
          "description": "Professional physical therapy services specializing in sports injuries, rehabilitation, and pain management.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "[Your Street Address]",
            "addressLocality": "[Your City]",
            "addressRegion": "[Your State]",
            "postalCode": "[Your ZIP]",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "[Your Latitude]",
            "longitude": "[Your Longitude]"
          },
          "url": "https://[your-domain].netlify.app",
          "telephone": "[Your Phone Number]",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "17:00"
            }
          ],
          "sameAs": [
            "[Your Facebook URL]",
            "[Your Instagram URL]",
            "[Your LinkedIn URL]"
          ]
        })}
      </script>
    </Router>
  )
}

export default App 