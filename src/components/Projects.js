import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>
            A showcase of my recent work and personal projects that demonstrate
            my skills and passion for development.
          </p>
        </div>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card featured">
            <img
              src={process.env.PUBLIC_URL + '/images/3.png'}
              alt="E-Commerce Platform"
              className="hala"
              width="100%"
              height="auto"
            />
            <div className="project-content">
              <h3>E-Commerce Platform</h3>
              <p>
                A full-stack e-commerce solution with payment integration,
                inventory management and admin dashboard.
              </p>
              <div className="project-tech">
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">Javascript</span>
                
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Rhiscky10/adidas-shop"
                  className="btn btn-outline btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Code
                </a>
                <a
                  href="https://rhiscky10.github.io/adidas-shop/"
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card featured">
            <img
              src={process.env.PUBLIC_URL + '/images/4.png'}
              alt="Health & Wellness Tracker"
              className="hala"
              width="500px"
              height="auto"
            />
            <div className="project-content">
              <h3>Health & Wellness Tracker</h3>
              <p>My Wellness Tracker System – Prioritize Your Mind & Body!</p>
              <div className="project-tech">
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Node.js</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Rhiscky10/wellness/"
                  className="btn btn-outline btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Code
                </a>
                <a
                  href="https://rhiscky10.github.io/wellness/"
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <img
              src={process.env.PUBLIC_URL + '/images/5.png'}
              alt="Stock Pulse"
              className="hala"
              width="450px"
              height="auto"
            />
            <div className="project-content">
              <h3>Stock Pulse</h3>
              <p>An inventory management system for tracking stock levels and sales data in real-time.</p>
              <div className="project-tech">
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React.js</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Rhiscky10/stock-pulse"
                  className="btn btn-outline btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Code
                </a>
                <a
                  href="https://stock-pulse-eight.vercel.app/"
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card featured">
            <img
              src={process.env.PUBLIC_URL + '/images/6.png'}
              alt="Farm-Health-Advisor"
              className="hala"
              width="100%"
              height="auto"
            />
            <div className="project-content">
              <h3>Farm-Health-Advisor</h3>
              <p>
                Vision AI that enables farmers to upload images of crops or livestock and receive structured, intelligent disease analysis in seconds.

              </p>
              <div className="project-tech">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Google Gemini API</span>
                <span className="tech-tag">Supabase</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Rhiscky10/Farm-Health-Advisor-Main"
                  className="btn btn-outline btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Code
                </a>
                <a
                  href="https://farm-health-advisor-main.vercel.app"
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-card">
            <img
              src={process.env.PUBLIC_URL + '/images/8.png'}
              alt="Portfolio Website"
              className="hala"
              width="400px"
              height="auto"
            />
            <div className="project-content">
              <h3>Portfolio Website</h3>
              <p>
                A responsive portfolio website with smooth animations, contact
                forms, and blog integration.
              </p>
              <div className="project-tech">
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Git</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Rhiscky10"
                  className="btn btn-outline btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Code
                </a>
                <a
                  href="https://rhiscky10.github.io/portfolio-demo/"
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="project-card">
            <img
              src={process.env.PUBLIC_URL + '/images/7.png'}
              alt="Study Planner"
              className="hala"
              width="400px"
              height="auto"
            />
            <div className="project-content">
              <h3>EcoWaste</h3>
              <p>
                EcoWaste is a modern e-waste management web application designed to help communities track and manage electronic waste collection efficiently.
              </p>
              <div className="project-tech">
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Supabase</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Rhiscky10/re-cycle-one"
                  className="btn btn-outline btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Code
                </a>
                <a
                  href="https://re-cycle-one.vercel.app/"
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="projects-cta">
          <a
            href="https://github.com/Rhiscky10"
            className="btn btn-outline btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
