import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-container">
             <img 
              src="https://avatars.githubusercontent.com/u/75083550?v=4" 
              alt="Mohammad Momenuzzaman" 
              className="about-image"
            />
          </div>
          <div className="about-text">
            <p>
              Hi, I'm <strong>Mohammad Momenuzzaman</strong>. I'm currently working at <strong>Ezetop Unlimited Company t/a Ding</strong>.
            </p>
            <p>
              I'm passionate about <strong>Machine Learning</strong>, <strong>Web Development</strong>, and <strong>App Development</strong>. 
              I'm always looking to collaborate on interesting projects and am currently learning <strong>.NET</strong>.
            </p>
            <p>
              Feel free to ask me about my final year project!
            </p>
            <p className="fun-fact">
              ⚡ Fun fact: vibe coding is underrated :p
            </p>
          </div>
        </div>
        
        <div className="skills-container">
            <h3>Skills</h3>
            <div className="skills-grid">
              <span className="skill-tag">Machine Learning</span>
              <span className="skill-tag">Web Development</span>
              <span className="skill-tag">App Development</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">.NET</span>
              <span className="skill-tag">Docker</span>
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;
