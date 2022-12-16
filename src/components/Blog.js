const Blog = ({ blog }) => {
  return (
    <div className="blog">
      <div className="blog-img">
        <img src={blog.img} alt={blog.title} />
      </div>
      <div className="blog-texts">
        <h2 className="blog-title">{blog.title}</h2>
        <p className="blog-publisher">
          Published by <span className="author">{blog.author}</span> on{" "}
          <span className="date">{blog.date}</span>
        </p>
        <p className="blog-body">{blog.body}</p>
        <button className="blog-btn">Read more</button>
      </div>
    </div>
  );
};

export default Blog;
