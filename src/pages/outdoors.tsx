import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import './outdoors.css'
import image_outdoors from '../components/assets/pic04-free-img.jpg';
import logo from '../components/assets/free-img.png';
import '../components/Room/LivingRoom';
import image_1 from '../components/assets/image_1.jpg';
import 'boxicons/css/boxicons.min.css';
import BlogPost from '../components/Room/BlogPost';
import img_2 from '../components/assets/img_1.jpg';
import img_3 from '../components/assets/img_1.jpg';
import Tags from '../components/tags';

export default function Outdoors(){


    interface BlogPostProps {
        title: string;
        date: string;
        image: string;
        excerpt: string;
      }

    const blogPosts: BlogPostProps[] = [
        {
          title: 'Taciti hendrerit dis odit incidunt',
          date: 'November 21, 2017 / Kitchen, Living Room, Reading Room',
          image: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-768x486.jpg',
          excerpt: 'Cillum corrupati accumsan non curmque alias ipsa, plabae! Molis auctor, repellendus sagittis? Corporis dictumst mollis, curae. Eaque, quam per, praesent pretium eu non curmque animi dolorem.'
        },
        {
          title: 'Sunt doloremque blandit inven',
          date: 'November 20, 2017 / Living Room',
          image: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img-768x406.jpg',
          excerpt: 'Nisi vel urna debitis morbi tringilla malesuada maiores optio! Ratione, facilis, illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestae hendrerit, animi eros.'
        },
        {
          title: 'Fugit quaerat vulputate! Irure.',
          date: 'November 20, 2017 / Living Room',
          image: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-768x486.jpg',
          excerpt: 'Sodales inceptos dolorem elit molestias minima quam ipsa proident muesceras magnam massa. Hac maiores? Dis elit facilis sapiente! Vulputate praesent essel Hic? Possimus elit? Molestiae vulputates.'
        },
        {
          title: 'Litora aptent magnam laoreet!',
          date: 'November 7, 2017 / Living Room',
          image: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot-768x512.jpg',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu.'
        }
      ];


      const posts = [
        {
            image: image_1,
            title: 'Consectetuer vehicula ab',
            description: 'In Kitchen, Lifestyle',
        },
        {
            image: img_2,
            title: 'Taciti hendrerit dis odit incidunt',
            description: 'In Travel, Adventure',
        },
        {
            image: img_3,
            title: 'Sunt doloremque blandit inven',
            description: 'In Technology, Innovation',
        },
        {
            image: img_3,
            title: 'Fugit quaerat vulputate! Irure.',
            description: 'In Technology, Innovation',
        },
        {
            image: img_3,
            title: 'Litora aptent magnam laoreet!',
            description: 'In Technology, Innovation',
        },
       
      ];

      
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;  
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);

    // Diviser les posts en fonction de la page
    const displayedPosts = blogPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

  return(
    <>
        <header className="header_outdoors"
      style={{
        backgroundImage: `url(${image_outdoors})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        position: 'relative',
      }}
    >
      <div className="menu_outdoors">
        <div className="logo">
          <img src={logo} alt="Logo du site" className="logo-image" />
        </div>

        <div className="nav-bar_outdoors">
          <ul>
          <li><Link to="/aboutUs">About Us</Link></li> 
            <li><Link to="/Livingroom">Living Room</Link></li>
            <li><Link to="/kitchen">Kitchen</Link></li>
            <li><Link to="/outdoors">Outdoors</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center_outdoors">
        <h1>Outdoors</h1>
        <p><i>Quam a diamlorem explicabo quos fugit, ut aliquam modi.</i></p>_outdoors
      </div>
    </header>




    <section>
            <div className="main">
            <div className="container">
                <div className="container_kitchen">
                    <h1>Consectetuer vehicula ab</h1>
                    <p className="date">
                        November 21, 2017 / Kitchen, Lifestyle
                    </p>
                    <div className="img">
                        <img src={image_1} alt="" />
                    </div>
                    <p className="text">
                    Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! 
                    Minus eum eveniet, <br /> praesentium elementum interdum! Sodales, metus, velit 
                    voluptatibus voluptas lorem, etiam <br /> vulputate? Aenean possimus montes fugiat […]
                    </p>
                    <a href="">Read More <i className='bx bxs-chevrons-right' ></i> </a>
                </div>
                    <hr />

                    <div className="blog-grid-container">
                        <div className="blog-grid">
                            {displayedPosts.map((post, index) => (
                                <div key={index} className="blog-post-card">
                                    <BlogPost {...post} />
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="pagination-container">
    {currentPage > 1 && (
        <button
            className="pagination-btn"
            onClick={() => setCurrentPage(currentPage - 1)}
        >
            Previous
        </button>
    )}


                    </div>

                </div>

            <div className="footer-container">
                <div className="search">
                        <input type="search" name="search" placeholder="Search..." />
                        <i className="bx bx-search"></i>
                    </div>

                <div className="recent_post">
                    <h2>Recent Posts</h2>
                    {posts.map((item, index) => (
                        <div key={index}>
                            <div className="posts">
                                <img className="img_posts" src={item.image} alt={`Post ${index + 1}`} />
                                <div className="posts_info">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            {index < posts.length - 1 && <hr className="post-hr" />}
                        </div>
                    ))}
                </div>
                <div className="tag">
                    <Tags/>
                </div>
            </div>
            </div>
    </section>



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
          <Link to="/Livingroom">Living Room</Link>
          <Link to="/kitchen">Kitchen</Link>
          <Link to="/outdoors">Outdoors</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </footer>
    </>
  );
}
