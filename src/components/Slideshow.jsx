import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: '/images/slide1.jpg',
      caption: 'Modern Treatment Facility'
    },
    {
      image: '/images/slide2.jpg',
      caption: 'State-of-the-Art Equipment'
    },
    {
      image: '/images/slide3.jpg',
      caption: 'Comfortable Recovery Space'
    },
    {
      image: '/images/slide4.jpg',
      caption: 'Professional Care Team'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow">
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-caption">
              <h3>{slide.caption}</h3>
            </div>
          </div>
        ))}
        <button className="slideshow-button prev" onClick={goToPrevious}>
          &#10094;
        </button>
        <button className="slideshow-button next" onClick={goToNext}>
          &#10095;
        </button>
      </div>
      <div className="slideshow-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow; 