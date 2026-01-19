'use client';

import { useState } from 'react';

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);

  const projects = [
    {
      title: "ToroRise",
      date: "May 2025 - August 2025",
      description: "Building a personal frontend finance web application that integrates bank accounts to visualize spending, credit usage, and financial health in one dashboard. Implementing secure user authentication with Clerk and Plaid API for real-time bank data access. Leveraging JavaScript, HTML/CSS, and backend tools to deliver intelligent insights and user-friendly UI/UX. Developing AI-powered features to detect financial trends, spending spikes, and savings opportunities. Implementing front-end architecture using React and Next.js with dynamic routing and component-based design.",
      tags: ["React", "Next.js", "JavaScript", "Plaid API"]
    },
    {
      title: "2D Platformer Game Engine",
      date: "January 2025 - May 2025",
      description: "Developed a modular 2D game engine using Java, emphasizing object-oriented principles. Implemented player and enemy movement logic using physics-based and event-driven controls. Created AI enemy behavior with decision trees for dynamic game responses and invincibility states. Created an extensible rendering system with Java Swing and a custom SpriteGraphics engine.",
      tags: ["Java", "OOP", "Game Development", "Java Swing"]
    },
    {
      title: "Algebra for Growers",
      date: "January 2024 - June 2024",
      description: "Developed a modular Algebra 1 tutor app in Python using Tkinter, simulating adaptive learning. Managed application logic, UI, and progress tracking features, creating a product that improves user retention through milestone-based learning. Integrated real-world math problems to enhance usability and educational value, demonstrating problem framing and product intuition.",
      tags: ["Python", "Tkinter", "Education"]
    }
  ];

  return (
    <div className="container">
      <header>
        <h1 className="name">Rakibul Alam</h1>
        <p className="subtitle">Computer Engineering Student</p>
      </header>

      <main>
        <section className="intro-section">
          <div className="intro-content">
            <h2>About Me</h2>
            <p className="location">📍 Georgia Institute of Technology, Atlanta, Georgia</p>
            <p className="description">
              I&apos;m a Computer Engineering student pursuing my B.S. at Georgia Tech, graduating in May 2027. 
              My passion lies in <strong>system architecture</strong> and <strong>distributed systems</strong>, 
              where I explore how complex systems are designed, built, and scaled to handle real-world challenges.
            </p>
            <p className="description">
              I&apos;m fascinated by the intricate balance between performance, scalability, and reliability in 
              distributed computing environments. Through my coursework and projects, I&apos;m developing expertise 
              in building robust systems that can efficiently process, analyze, and distribute data across 
              multiple nodes while maintaining consistency and fault tolerance.
            </p>
          </div>
        </section>

        <section className="toggle-section">
          <div className="toggle-container">
            <label className="toggle-label">
              <span className="toggle-text">{showProjects ? 'Hide Projects' : 'Show Projects'}</span>
              <input 
                type="checkbox" 
                checked={showProjects}
                onChange={(e) => setShowProjects(e.target.checked)}
                className="toggle-input"
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </section>

        {showProjects && (
          <section className="projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3>{project.title}</h3>
                  <p className="project-date">{project.date}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer>
        <div className="contact-info">
          <p>Queens, NY | Ralam32@gatech.edu | (516)-912-8719</p>
        </div>
      </footer>
    </div>
  );
}
