import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';
import resume from '../data/SanthoshBCV.pdf';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
   <section>
      <header> 
        <Link to="/" className="logo">
          Santhosh<span>Boinapally</span>
        </Link>
        <nav>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/About" className="nav-links" onClick={handleClick}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Projects" className="nav-links" onClick={handleClick}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Skills" className="nav-links" onClick={handleClick}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Education" className="nav-links" onClick={handleClick}>
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-links" onClick={handleClick}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-btn"><a href={resume} download="SanthoshBCV.pdf">Resume</a></button>
            </li>
        </ul>
        </nav>
        </header>
        
    </section>
  );
};

export default Navbar;