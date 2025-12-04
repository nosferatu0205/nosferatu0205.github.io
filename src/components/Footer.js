import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Mohammad Momenuzzaman. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/nosferatu0205" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:momenfahmid@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
