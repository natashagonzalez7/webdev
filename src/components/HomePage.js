import React from 'react';

function HomePage() {
  return (
    <div>
      <main>
        <h1 className="title">Natasha's Guide to Curly Hair</h1>
        <p className="description">Explore the world of curly hair care with practical tips, scientific insights, and community support.</p>
        <section className="grid">
          <a href="https://youtube.com" className="card">
            <h2>Youtube &rarr;</h2>
            <p>Follow us on YouTube for more tips.</p>
          </a>
          <a href="https://tiktok.com" className="card">
            <h2>TikTok &rarr;</h2>
            <p>Join our TikTok community.</p>
          </a>
          <a href="https://instagram.com" className="card">
            <h2>Instagram &rarr;</h2>
            <p>See our latest posts on Instagram.</p>
          </a>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
