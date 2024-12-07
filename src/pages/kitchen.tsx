import React from "react";
import { Link } from "react-router-dom"; 
import 'boxicons/css/boxicons.min.css';

import logo from '../components/assets/free-img.png';
import image_1 from '../components/assets/image_1.jpg';



export default function Kitchen(){



    return(
        <div>
     <header className="header"
      style={{
        backgroundImage: `url(${image_1})`,
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
        <h1>Kitchen</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. 
      </p>
         <div>            
             
         </div>
         <div>
            
         </div>
      </div>
    </header> 
    



  <div>
  <footer className="footer">
      <div className="container_footer"> 
        <div className="footer_about">
          <h3>ABOUT</h3>
          <p>
            Nulla quis lorem ut libero malesuada feugiat. <br />
            Praesent sapien massa, convallis a pellentesque 
            nec, <br />egestas non nisi. Pellentesque in ipsum id 
            orci porta <br /> dapibus. Sed porttitor  lectus nibh.
          </p>
        </div>
        <div className="footer_social">
          <h3>SOCIAL</h3>
          <i className='bx bxl-facebook-square'></i>
          <i className='bx bxl-instagram-alt'></i>
          <i className='bx bxl-pinterest'></i>
          <i className='bx bxl-twitter'></i>
        </div>
        <div className="footer_contact">
          <h3>CONTACT US</h3>
          <p>
            500 Terry Francois St<br />.
            San Francisco,<br />
            CA 94158 <br />
            +1-410-555-0134 <br />|
            info@example.com <br />
            contact@example.com <br />
          </p>
        </div>
      </div>

      <hr />

      <div className="footer_bottom">
        <div className="footer_text">
          <p>&copy; Copyright 2024 ,Home Decor | Powered by Home Decor</p>
        </div>
        <div className="footer_link">
            <Link to="/aboutUs">About Us</Link> 
            <Link to="/Livingroom">Living Room</Link>
            <Link to="/kitchen">Kitchen</Link>
            <Link to="/outdoors">Outdoors</Link>
            <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </footer>
    </div>
    </div>
  )
}