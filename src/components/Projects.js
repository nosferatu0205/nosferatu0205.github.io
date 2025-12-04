import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "dockerized-llm-tester",
      description: "A Python-based tool for testing LLMs in a dockerized environment.",
      tags: ["Python", "Docker", "LLM"],
      link: "https://github.com/nosferatu0205/dockerized-llm-tester"
    },
    {
      id: 2,
      title: "baytaxassignment",
      description: "JavaScript assignment project.",
      tags: ["JavaScript"],
      link: "https://github.com/nosferatu0205/baytaxassignment"
    },
    {
      id: 3,
      title: "dockerized-scraper",
      description: "A web scraper running in a Docker container.",
      tags: ["JavaScript", "Docker", "Web Scraping"],
      link: "https://github.com/nosferatu0205/dockerized-scraper"
    },
    {
      id: 4,
      title: "street-fighter-jff",
      description: "Street fighter game as a practise for prompt engineering.",
      tags: ["Game Dev", "Prompt Engineering"],
      link: "https://github.com/nosferatu0205/street-fighter-jff"
    },
    {
      id: 5,
      title: "nosferatu0205",
      description: "Config files for my GitHub profile.",
      tags: ["Config", "GitHub"],
      link: "https://github.com/nosferatu0205/nosferatu0205"
    },
    {
      id: 6,
      title: "claudecodetest",
      description: "Test repository for Claude Code.",
      tags: ["Testing"],
      link: "https://github.com/nosferatu0205/claudecodetest"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
