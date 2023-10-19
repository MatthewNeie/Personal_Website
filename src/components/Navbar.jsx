import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-links-div">
            <Link to="/" className="navbar-links">Welcome</Link>
            <Link to="/about" className="navbar-links">About</Link>
            <Link to="/education" className="navbar-links">Education</Link>
            <Link to="/workexperience" className="navbar-links">Work Experience</Link>
            <Link to="/projects" className="navbar-links">Projects</Link>
        </div>
    </div>
  )
}

export default Navbar;
