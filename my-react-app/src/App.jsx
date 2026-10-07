import React from "react";
import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">

        <div className="logo">
          Sri Sahana udhayakumar
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>

      </header>


      {/* ================= HERO SECTION ================= */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="welcome">
            WELCOME TO MY PROFILE
          </p>

          <h1>
            Hi, I'm <span>Sri Sahana</span>
          </h1>

          <h2>
            IT Student & Web Developer
          </h2>

          <p className="hero-description">
            Passionate about creating modern web applications
            and learning new technologies. I enjoy turning ideas
            into simple, useful and professional digital solutions.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              View Projects
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>

          </div>

          <div className="social-links">
            <a href="#" target="_blank">GitHub</a>
            <a href="#" target="_blank">LinkedIn</a>
            <a href="mailto:yourmail@gmail.com">Email</a>
          </div>

        </div>


        {/* PROFILE PHOTO */}

        <div className="hero-photo-container">

          <div className="photo-decoration"></div>

          <div className="photo-card">
            <img
              src="/profile.jpg"
              alt="Sri Sahana"
            />
          </div>

          <div className="experience-box">
            <strong>01</strong>
            <span>
              Internship<br />
              Experience
            </span>
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="section">

        <div className="section-title">

          <p>ABOUT ME</p>

          <h2>
            A little about me
          </h2>

        </div>

        <div className="about-container">

          <div className="about-text">

            <p>
              I am an Information Technology student passionate
              about software development, web technologies and
              creating practical digital solutions.
            </p>

            <p>
              I enjoy learning new technologies and applying my
              knowledge through projects, internships, hackathons
              and real-world applications.
            </p>

            <p>
              My goal is to continuously improve my technical,
              problem-solving and communication skills while
              building meaningful software solutions.
            </p>

          </div>


          <div className="about-details">

            <div className="detail-item">
              <span>Name</span>
              <strong>
                Sri Sahana Udhayakumar
              </strong>
            </div>

            <div className="detail-item">
              <span>Degree</span>
              <strong>
                B.E. Information Technology
              </strong>
            </div>

            <div className="detail-item">
              <span>Role</span>
              <strong>
                Student Developer
              </strong>
            </div>

            <div className="detail-item">
              <span>Focus</span>
              <strong>
                Web Development
              </strong>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="section skills-section">

        <div className="section-title">

          <p>TECHNICAL SKILLS</p>

          <h2>
            Technologies I work with
          </h2>

        </div>


        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-number">01</div>
            <h3>HTML & CSS</h3>
            <p>
              Building responsive and structured web interfaces.
            </p>
          </div>


          <div className="skill-card">
            <div className="skill-number">02</div>
            <h3>JavaScript</h3>
            <p>
              Creating interactive and dynamic web applications.
            </p>
          </div>


          <div className="skill-card">
            <div className="skill-number">03</div>
            <h3>React.js</h3>
            <p>
              Developing modern component-based applications.
            </p>
          </div>


          <div className="skill-card">
            <div className="skill-number">04</div>
            <h3>TypeScript</h3>
            <p>
              Building reliable and scalable web applications.
            </p>
          </div>


          <div className="skill-card">
            <div className="skill-number">05</div>
            <h3>Java</h3>
            <p>
              Programming, problem solving and DSA fundamentals.
            </p>
          </div>


          <div className="skill-card">
            <div className="skill-number">06</div>
            <h3>Git & GitHub</h3>
            <p>
              Version control and collaborative development.
            </p>
          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section">

        <div className="section-title">

          <p>MY PROJECTS</p>

          <h2>
            Things I've built
          </h2>

        </div>


        <div className="projects-container">

          {/* PROJECT 1 */}

          <div className="project-card">

            <div className="project-top">

              <span className="project-number">
                01
              </span>

              <span className="project-arrow">
                ↗
              </span>

            </div>

            <h3>
              Smart Blood Donor Finder
            </h3>

            <p>
              A web application that helps hospitals find
              nearby eligible blood donors during emergencies.
              The system focuses on connecting donors and
              hospitals quickly and efficiently.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>Web App</span>
            </div>

          </div>


          {/* PROJECT 2 */}

          <div className="project-card">

            <div className="project-top">

              <span className="project-number">
                02
              </span>

              <span className="project-arrow">
                ↗
              </span>

            </div>

            <h3>
              Quantum Xplore
            </h3>

            <p>
              An interactive quantum computing learning platform
              designed to help students understand quantum
              algorithms through visualization and simulation.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>MongoDB</span>
            </div>

          </div>


          {/* PROJECT 3 */}

          <div className="project-card">

            <div className="project-top">

              <span className="project-number">
                03
              </span>

              <span className="project-arrow">
                ↗
              </span>

            </div>

            <h3>
              Internship Management System
            </h3>

            <p>
              A platform for managing interns, teams, tasks
              and internship activities with role-based
              dashboards.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Dashboard</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section id="education" className="section education-section">

        <div className="section-title">

          <p>EDUCATION</p>

          <h2>
            My academic journey
          </h2>

        </div>


        <div className="education-card">

          <div className="education-year">
            2025 — Present
          </div>

          <div>

            <h3>
              Bachelor of Engineering
            </h3>

            <h4>
              Information Technology
            </h4>

            <p>
              Kongu Engineering College
            </p>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact-section">

        <p className="contact-small">
          HAVE A PROJECT OR OPPORTUNITY?
        </p>

        <h2>
          Let's build something
          <br />
          <span>great together.</span>
        </h2>

        <p className="contact-description">
          I'm always interested in learning, collaborating
          and exploring new opportunities.
        </p>

        <a
          href="mailto:yourmail@gmail.com"
          className="contact-button"
        >
          Get In Touch →
        </a>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div>
          © 2026 Sri Sahana Udhayakumar
        </div>

        <div>
          Built with React
        </div>

      </footer>

    </div>
  );
}

export default App;