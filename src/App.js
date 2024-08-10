import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import SciencePage from './components/SciencePage';
import './style.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const toggleTheme = () => setDarkTheme(!darkTheme);
  const increaseFontSize = () => setFontSize(fontSize + 2);
  const decreaseFontSize = () => setFontSize(Math.max(12, fontSize - 2));

  const appStyle = {
    fontSize: `${fontSize}px`,
    backgroundColor: darkTheme ? '#333' : '#FFF',
    color: darkTheme ? '#FFF' : '#333',
  };

  return (
    <Router>
      <div style={appStyle}>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/science">Science</a></li>
          </ul>
        </nav>
        <div className="controls">
          <button onClick={increaseFontSize}>Increase Font Size</button>
          <button onClick={decreaseFontSize}>Decrease Font Size</button>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/science" element={<SciencePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
