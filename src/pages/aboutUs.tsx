import React from "react";
import { Link } from "react-router-dom"; 
import './aboutUs.css'
import image_about from '../components/assets/lady-in-balcony.jpg';
import logo from '../components/assets/free-img.png';

function AboutUs () {


  
  return (
    <div>
        <header className="header_about"
        style={{
          backgroundImage: `url(${image_about})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          position: 'relative',
        }}
      >
        <div className="menu_about">
          <div className="logo_about">
            <img src={logo} alt="Logo du site" className="logo-image" />
          </div>

          <div className="nav-bar_about">
            <ul>
              <li><Link to="/AboutUs">About Us</Link></li> 
              <li><Link to="">Living Room</Link></li> 
              <li><Link to="">Kitchen</Link></li> 
              <li><Link to="">Outdoors</Link></li>
              <li><Link to="">Contact</Link></li> 
            </ul>
          </div>
        </div>
        <div className="text-center_about">
          <h2>Know More</h2>
          <h1>About Us</h1>
        </div>
      </header>


    <div className="body">
    <div className="container">
    <div className="content">

      <div className="image-section">
        <img src={image_about} alt="Decorative Image 1"/>
        <img src={image_about} alt="Decorative Image 2"/>
      </div>

      <div className="text-section">
        <h1>Working Since 1995</h1>
        <hr/>
        <p>Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus dapibus quis eos, risus, vehicula! Egestas qui interdum habitant! Laoreet, placeat maxime Suspendisse.</p>
        <p className="italic">Design is a funny word</p>
        <p>Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus dapibus quis eos, risus, vehicula! Egestas qui interdum habitant! Laoreet, placeat maxime Suspendisse.</p>
      </div>
    </div>
  </div>
    </div>
    </div>
  );
};

export default AboutUs;
