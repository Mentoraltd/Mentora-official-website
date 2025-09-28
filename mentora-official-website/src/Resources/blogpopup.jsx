import React from "react";

const BlogPopup = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div className="blog-popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>✖</button>
        <img src={blog.coverImage} alt={blog.title} />
        <h2>{blog.title}</h2>
        <p><i>By {blog.author} | {new Date(blog.datePublished).toDateString()}</i></p>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  );
};

export default BlogPopup;
