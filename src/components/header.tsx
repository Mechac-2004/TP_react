import React from "react";
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
                    <li><a href="">About Us</a></li>
                    <li><a href="">Living Room</a></li>
                    <li><a href="">Kitchen</a></li>
                    <li><a href="">Outdoors</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                
            </div>
        </div>
        <div className="text-center">
            <h1>Coming Home Never <br/>Felt So Good!</h1>
            <p><i>Quam a diamlorem explicabo quos fugit, ut aliquam modi.</i></p>
            <button>FIND YOUR STYLE</button>
        </div>
    </header>
    )
}