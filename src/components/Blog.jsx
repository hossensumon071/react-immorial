import React from 'react';

const Blog = ({needFullHeight}) => {
  return (
    <section className={`${needFullHeight && "min-h-scrren" }blog wrapper`}>
      <h2 className="section-title">Blog</h2>
    </section>
  );
};

export default Blog;