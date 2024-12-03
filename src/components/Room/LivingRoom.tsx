import React from "react";
import './LivingRoom.css';
import image_1 from '../assets/image_1.jpg';
import 'boxicons/css/boxicons.min.css';
import BlogPost from './BlogPost';
import img_2 from '../assets/img_1.jpg';
import img_3 from '../assets/img_1.jpg';

interface BlogPostProps {
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export default function LivingRoom() {
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
      title: 'Lorem Ipsum Dolor',
      description: 'In Travel, Adventure',
    },
    {
      image: img_3,
      title: 'Sit Amet Consectetur',
      description: 'In Technology, Innovation',
    },
    {
      image: img_3,
      title: 'Sit Amet Consectetur',
      description: 'In Technology, Innovation',
    },
    {
      image: img_3,
      title: 'Sit Amet Consectetur',
      description: 'In Technology, Innovation',
    },
  ];

  return (
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
              {blogPosts.map((post, index) => (
                <div key={index} className="blog-post-card">
                  <BlogPost {...post} />
                  {index < posts.length - 1 && <hr className="post-hr" />}
                </div>
              ))}
            </div>
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
        </div>
      </div>
    </section>
  );
}
