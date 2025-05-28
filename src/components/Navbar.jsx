import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Gillespie Therapy</Link>
      </div>
    </div>
  );
};

export default Navbar; 