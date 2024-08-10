import React, { useState } from 'react';
import curlyHairImage from '../images/curly-hair.jpeg';
import promImages from '../images/prom-images.jpg';

function BlogPage() {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div>
      <main>
        <h1 className="title">Blog</h1>
        <section className="blog-posts">
          <div className="post">
            <img
              src={curlyHairImage}
              alt="Curly Hairstyles for School"
              className={isZoomed ? "zoomed" : ""}
              onClick={toggleZoom}
            />
            <h2>Curly Hairstyles for School</h2>
            <p>These are wonderful options for curly hairstyles at school</p>
          </div>
          <div className="post">
            <img
              src={promImages}
              alt="Curly Hairstyles for Prom"
              className={isZoomed ? "zoomed" : ""}
              onClick={toggleZoom}
            />
            <h2>Curly Hairstyles for Prom</h2>
            <p>These are wonderful options for curly hairstyles at prom</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BlogPage;
