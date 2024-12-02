
import React from 'react';
import BlogPost from './BlogPost';

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

const BlogList: React.FC = () => {
    return (
      <div className="blog-grid-container">
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    );
  };

export default BlogList;
