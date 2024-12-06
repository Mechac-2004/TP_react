import React from "react";
import './Contact.css'
import logo from '../components/assets/free-img.png';
import image from '../components/assets/back.jpg';

export default function Contact(){


    return(
        <header className="Contact"
        style={{
            backgroundImage: 'url(${image})',
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
                    <li><a href="">About Us</a></li>
                    <li><a href="">Living Room</a></li>
                    <li><a href="">Kitchen</a></li>
                    <li><a href="">Outdoors</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                
            </div>
        </div>
        <div className="text-center">
            <h1>Get in touch </h1>
        </div>
        </header>
    )
}