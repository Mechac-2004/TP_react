import React from "react";
import { Link } from "react-router-dom"; 
import './header.css'
import image from '../components/assets/image.jpg';
import logo from '../components/assets/free-img.png';

export default function Header(){
  return(
    <header className="header"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        position: 'relative',
      }}
    >
      <div className="menu">
        <div className="logo">
          <img src={logo} alt="Logo du site" className="logo-image" />
        </div>

        <div className="nav-bar">
          <ul>
          <li><Link to="/aboutUs">About Us</Link></li> 
            <li><Link to="/Livingroom">Living Room</Link></li>
            <li><Link to="/kitchen">Kitchen</Link></li>
            <li><Link to="/outdoors">Outdoors</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <h1>Coming Home Never <br /> Felt So Good!</h1>
        <p><i>Quam a diamlorem explicabo quos fugit, ut aliquam modi.</i></p>
        <button>FIND YOUR STYLE</button>
      </div>
    </header>
  );
}
