import React from "react";
import './Contact.css'
import image from '../../components/assets/image.jpg';
import logo from '../../components/assets/free-img.png';
import Carte from '../Contact/Carte';
import { Link } from "react-router-dom"; 


function Contact(){

    return(
        <>
        <header className="Contact"
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

            <div className="nav-bar_Contact">
            <ul>
              <li><Link to="">About Us</Link></li> 
              <li><Link to="">Living Room</Link></li> 
              <li><Link to="">Kitchen</Link></li> 
              <li><Link to="">Outdoors</Link></li>
              <li><Link to="/Contact">Contact</Link></li> 
            </ul>
          </div>
        </div>
        <div className="text-center">
        <h1>Get in Touch</h1>
      </div>
      </header>


            <div className="container_2">
                <div className="container_3">
                <div className="container_4">

                    <div className="Carte">
                        <div>
                        <Carte />
                        </div>
                    </div>
                </div>
            </div>
        
 

 
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
                    <p>About Us Living Room Kitchen Outdoors Contact</p>
                </div>
             </div>

</footer>
</div>
</>
    );
};

export default Contact;
