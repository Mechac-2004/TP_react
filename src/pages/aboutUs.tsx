import React from "react";
import { Link } from "react-router-dom"; 
import './aboutUs.css'
import image_about from '../components/assets/lady-in-balcony.jpg';
import logo from '../components/assets/free-img.png';
import image_body from '../components/assets/pic14-free-img.png';
import logo_1 from '../components/assets/client-logo-1.png'
import logo_2 from '../components/assets/client-logo-3.png'
import logo_3 from '../components/assets/client-logo-4.png'
import logo_4 from '../components/assets/client-logo-5.png'

function AboutUs () {


  
  return (
    <div>
      {/*Header*/}
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
              <li><Link to="/kitchen">Kitchen</Link></li> 
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

      {/*Body*/}

      <div className="container_1">
        <div className="container">
          <div className="content">

            <div className="image-section">
              <img src={image_body} alt="Decorative Image 1"/>
            </div>

            <div className="text-section">
              <h1>Working Since 1995</h1>
              <hr/>
              <p>
                Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus dapibus quis eos, 
                risus, vehicula! Egestas qui interdum habitant! Laoreet, placeat maxime Suspendisse.
                Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus. 
              </p>
              <p className="italic">Design is a funny word</p>
              <p>
                Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus dapibus quis eos, 
                risus, vehicula! Egestas qui interdum habitant! Laoreet, placeat maxime Suspendisse.
                Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus. 
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="logos-section">
        <div className="logo-item">
          <img src={logo_1} alt="Logo 1" />
        </div>
        <div className="logo-item">
          <img src={logo_2} alt="Logo 2" />
        </div>
        <div className="logo-item">
          <img src={logo_4} alt="Logo 3" />
        </div>
        <div className="logo-item">
          <img src={logo_3} alt="Logo 4" />
        </div>
        <div className="logo-item">
          <img src={logo_2} alt="Logo 5" />
        </div>
    </div>

{/*Footer*/}

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
          <Link to="">Living Room</Link>
          <Link to="/kitchen">Kitchen</Link>
          <Link to="">Outdoors</Link>
          <Link to="">Contact</Link>
        </div>
      </div>
    </footer>

    </div>
  );
};

export default AboutUs;
