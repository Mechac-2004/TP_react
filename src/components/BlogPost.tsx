import React from 'react';





interface BlogPostProps {
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, image, excerpt }) => {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <a href="#" className="card-title-link">
          <h2 className="card-title">{title}</h2>
        </a>
        <a href="#" className="card-date-link">
          <p className="card-text date-red">{date}</p>
        </a>
      </div>
      <img src={image} className="card-img-top custom-image" alt={title} />
      <div className="no-border">
        <p className="card-text">{excerpt}</p>
        <a href="#" className="read-more-red-link">Read More</a>
        

      </div>
    </div>
  );
};

export default BlogPost;



