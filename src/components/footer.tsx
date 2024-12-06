import React from "react";
import './footer.css';
import 'boxicons/css/boxicons.min.css';
import { Link } from "react-router-dom"; 

export default function Footer() {
  return (
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
          <Link to="">Kitchen</Link>
          <Link to="">Outdoors</Link>
          <Link to="">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
