'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  SiPython, SiC, SiOracle, SiHtml5, SiCss3, SiJavascript, 
  SiPostman, SiReact, SiNextdotjs, SiNodedotjs,
  SiGit, SiGoogledocs, SiIntellijidea, 
  SiGooglecloud, SiJetbrains, SiFigma 
} from 'react-icons/si';
import { FaMicrosoft, FaCode } from 'react-icons/fa';

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

  const skillIcons: { [key: string]: { icon: React.ReactNode, name: string } } = {
    "Python": { icon: <SiPython />, name: "Python" },
    "C": { icon: <SiC />, name: "C" },
    "Java": { icon: <SiOracle />, name: "Java" },
    "HTML5/CSS": { icon: <div style={{ display: 'flex', gap: '4px' }}><SiHtml5 /><SiCss3 /></div>, name: "HTML5/CSS" },
    "JavaScript": { icon: <SiJavascript />, name: "JavaScript" },
    "Excel": { icon: <FaMicrosoft />, name: "Excel" },
    "API Integration": { icon: <SiPostman />, name: "API Integration" },
    "React": { icon: <SiReact />, name: "React" },
    "Next.js": { icon: <SiNextdotjs />, name: "Next.js" },
    "Node.js": { icon: <SiNodedotjs />, name: "Node.js" },
    "Git": { icon: <SiGit />, name: "Git" },
    "Visual Studio Code": { icon: <FaCode />, name: "Visual Studio Code" },
    "Google Suite": { icon: <SiGoogledocs />, name: "Google Suite" },
    "IntelliJ": { icon: <SiIntellijidea />, name: "IntelliJ IDEA" },
    "Google Cloud": { icon: <SiGooglecloud />, name: "Google Cloud" },
    "Jetbrains IDE": { icon: <SiJetbrains />, name: "JetBrains IDE" },
    "Figma": { icon: <SiFigma />, name: "Figma" }
  };

  const skills = {
    programming: ["Python", "C", "Java", "HTML5/CSS", "JavaScript", "Excel", "API Integration", "React", "Next.js", "Node.js"],
    tools: ["Git", "Visual Studio Code", "Google Suite", "IntelliJ", "Google Cloud", "Jetbrains IDE", "Figma"]
  };

  return (
    <div className="container">
      <header>
        <div className="hero-header">
          <div className="avatar">
            <Image
              src="/profile.jpg"
              alt="Rakibul Alam headshot"
              width={120}
              height={120}
              priority
            />
          </div>
          <div>
            <h1 className="name">Rakibul Alam</h1>
            <p className="subtitle">Major: Computer Engineering</p>
          </div>
        </div>
      </header>

      <main>
        <section className="intro-section">
          <div className="intro-content">
            <h2>About Me</h2>
            <p className="location">📍 Queens, NYC | Georgia Institute of Technology</p>
            <p className="description">
              I&apos;m a Computer Engineering student pursuing my B.S. at Georgia Tech. 
              My passion lies in backend development and working with databases and making sure the data is secure and efficient. I also have a specialization in <strong>system architecture</strong> and <strong>distributed systems</strong>.
            </p>
            <p className="description">
              I&apos;m fascinated by the intricate balance between performance, scalability, and reliability in 
              distributed computing environments. Through my coursework and projects, I&apos;m developing expertise 
              in building systems that can efficiently process, analyze, and most of all a service-oriented architecture.
            </p>
          </div>
        </section>

        <section className="toggle-section">
          <div className="light-switch-container">
            <p className="switch-label">Pull down to view projects</p>
            <label className="light-switch">
              <input 
                type="checkbox" 
                checked={showProjects}
                onChange={(e) => setShowProjects(e.target.checked)}
                className="light-switch-input"
              />
              <div className="light-switch-track">
                <div className="light-switch-handle"></div>
              </div>
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

        <section className="skills-section">
          <h2>Skills & Technologies</h2>
          <div className="skills-container">
            <div className="skills-category">
              <h3>Programming Languages & Technologies</h3>
              <div className="skills-grid">
                {skills.programming.map((skill, index) => {
                  const skillData = skillIcons[skill];
                  return (
                    <div key={index} className="skill-icon-wrapper">
                      <div className="skill-icon">
                        {skillData?.icon || skill}
                      </div>
                      <span className="skill-tooltip">{skillData?.name || skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="skills-category">
              <h3>Tools & Platforms</h3>
              <div className="skills-grid">
                {skills.tools.map((tool, index) => {
                  const skillData = skillIcons[tool];
                  return (
                    <div key={index} className="skill-icon-wrapper">
                      <div className="skill-icon">
                        {skillData?.icon || tool}
                      </div>
                      <span className="skill-tooltip">{skillData?.name || tool}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="contact-info">
          <p>Queens, NY | Ralam32@gatech.edu | (516)-912-8719</p>
        </div>
      </footer>
    </div>
  );
}
