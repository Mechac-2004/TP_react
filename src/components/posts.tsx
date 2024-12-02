import React from 'react';
import './posts.css';
import img_1 from '../components/assets/img_1.jpg';
import img_2 from '../components/assets/img_1.jpg';
import img_3 from '../components/assets/img_1.jpg';
import 'boxicons/css/boxicons.min.css';

function Posts() {
  const posts = [
    {
        image: img_1,
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
  );
}

export default Posts;
