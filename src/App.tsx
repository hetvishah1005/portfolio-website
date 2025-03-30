import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronUp, Code, Database, Globe, Cpu, Server, Smartphone, BarChart2 } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="nav-logo">HS</a>
          <ul className="nav-links">
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => setActiveSection('about')}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={activeSection === 'skills' ? 'active' : ''}
                onClick={() => setActiveSection('skills')}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={() => setActiveSection('experience')}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={() => setActiveSection('projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => setActiveSection('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Hetvi Shah</h1>
            <h2 className="hero-subtitle">Full Stack Developer & Data Enthusiast</h2>
            <p className="hero-description">
              Master's graduate in Applied Computing with expertise in building scalable applications 
              and analyzing complex datasets. Passionate about creating efficient solutions that 
              bridge technology and business needs.
            </p>
            <div className="contact-info">
              <a href="mailto:shetvi05@gmail.com" className="contact-link">
                <Mail size={18} /> shetvi05@gmail.com
              </a>
              <a href="tel:519-816-5434" className="contact-link">
                <Phone size={18} /> +1 (519) 816-5434
              </a>
              <a href="https://linkedin.com/in/hetvi-shah-6277311a7" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://github.com/hetvishah1005" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="tech-stack-animation">
              <div className="tech-icon react"><Code size={24} /></div>
              <div className="tech-icon python"><Server size={24} /></div>
              <div className="tech-icon java"><Database size={24} /></div>
              <div className="tech-icon mongo"><Globe size={24} /></div>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">
            <span className="section-title-text">Technical Expertise</span>
          </h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3><Cpu size={20} /> Programming Languages</h3>
              <ul className="skill-list">
                <li>Java (OOP)</li>
                <li>Python</li>
                <li>C/C++</li>
                <li>JavaScript</li>
                <li>R</li>
                <li>PHP</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3><Globe size={20} /> Web Development</h3>
              <ul className="skill-list">
                <li>React</li>
                <li>Spring Boot</li>
                <li>Django</li>
                <li>jQuery</li>
                <li>HTML5/CSS3</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3><Database size={20} /> Databases</h3>
              <ul className="skill-list">
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Oracle</li>
                <li>Firebase</li>
                <li>SQLite</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3><BarChart2 size={20} /> Tools & Platforms</h3>
              <ul className="skill-list">
                <li>Docker</li>
                <li>Git/GitHub</li>
                <li>JIRA</li>
                <li>Postman</li>
                <li>Power BI</li>
                <li>Selenium</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title light">
            <span className="section-title-text">Professional Journey</span>
          </h2>
          
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>Python Developer Intern</h3>
                    <div className="timeline-company">Gujarat Infotech Limited</div>
                  </div>
                  <span className="timeline-date">Jan 2022 – June 2022</span>
                </div>
                <ul className="timeline-description">
                  <li>Automated HR processes including attendance tracking and employee data management using Python, reducing administrative workload by 35%</li>
                  <li>Led a team of 3 developers using JIRA and Git, improving workflow efficiency</li>
                  <li>Designed user-friendly interfaces that reduced task completion time by 20%</li>
                  <li>Deployed scalable solutions using Docker, optimizing deployment pipelines</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>Web Developer Intern</h3>
                    <div className="timeline-company">The Sparks Foundation (Remote)</div>
                  </div>
                  <span className="timeline-date">June 2021 – Sept 2021</span>
                </div>
                <ul className="timeline-description">
                  <li>Developed a secure banking platform with React frontend and Spring Boot backend processing 500+ daily transactions with 90% uptime</li>
                  <li>Created responsive interfaces that increased user engagement by 40%</li>
                  <li>Built data analytics pipelines enhancing operational efficiency by 30%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Projects Section */}
            <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title light">
            <span className="section-title-text">Project Showcase</span>
          </h2>
          
          <div className="projects-grid">
            {/* Windsor Wheels Project */}
            <div className="project-card">
              <div className="project-header">
                <h3>WindsorWheels</h3>
                <div className="project-links">
                  <a href="https://github.com/hetvishah1005/WindsorWheels" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
              <div className="project-tech">
                <span>Flutter</span>
                <span>Firebase</span>
                <span>Cloud Functions</span>
                <span>Docker</span>
                <span>Scrapy</span>
              </div>
              <div className="project-description">
                <p>Cross-platform car-buying app with intelligent recommendations and real-time data.</p>
                <ul>
                  <li>Developed cross-platform app using Flutter and Firebase with Google authentication</li>
                  <li>Implemented real-time Firestore database and Python-based Cloud Functions</li>
                  <li>Created intelligent deal algorithm with automated data scraping via Dockerized Scrapy</li>
                  <li>Optimized Firestore schemas and conducted API testing with Postman</li>
                  <li>Improved search efficiency by 30% through UI/UX refinements based on user feedback</li>
                </ul>
              </div>
            </div>

            {/* MultiServerFS Project */}
            <div className="project-card">
              <div className="project-header">
                <h3>MultiServerFS: Distributed File System</h3>
                <div className="project-links">
                  <a href="https://github.com/hetvishah1005/MultiServerFS" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
              <div className="project-tech">
                <span>Linux</span>
                <span>C</span>
                <span>Socket Programming</span>
                <span>Distributed Systems</span>
                <span>Protocol Design</span>
              </div>
              <div className="project-description">
                <p>High-performance distributed file system with client-server architecture.</p>
                <ul>
                  <li>Developed scalable file system improving operation speeds by 15% through optimized protocols</li>
                  <li>Engineered real-time communication layers using socket programming in C</li>
                  <li>Implemented background process optimization for 20% better resource utilization</li>
                  <li>Conducted rigorous testing in Linux environment with comprehensive edge case handling</li>
                  <li>Designed fault-tolerant architecture ensuring 99.9% system availability</li>
                </ul>
              </div>
            </div>

            {/* Education and Mismatch in Labour Market */}
            <div className="project-card">
              <div className="project-header">
                <h3>Education and Labour Market Analysis</h3>
                <div className="project-links">
                  <a href="https://github.com/hetvishah1005/Edu-WorkFit" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
              <div className="project-tech">
                <span>Python</span>
                <span>Pandas</span>
                <span>Scikit-learn</span>
                <span>Power BI</span>
                <span>Statistics Canada</span>
              </div>
              <div className="project-description">
                <p>Comprehensive analysis of Canadian labor market trends and education alignment.</p>
                <ul>
                  <li>Conducted data-driven analysis of Canadian labor market using Statistics Canada datasets</li>
                  <li>Identified skill gaps and employment trends through machine learning clustering techniques</li>
                  <li>Developed forecasting models to predict future labor market demands</li>
                  <li>Created policy framework to align education with industry needs</li>
                  <li>Visualized insights through interactive Power BI dashboards</li>
                </ul>
              </div>
            </div>

            {/* Local4U Project */}
            <div className="project-card">
              <div className="project-header">
                <h3>Local4U</h3>
                <div className="project-links">
                  <a href="https://github.com/farhatLamiaElma/Local4U" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
              <div className="project-tech">
                <span>Django</span>
                <span>PostgreSQL</span>
                <span>NLP</span>
                <span>PayPal API</span>
                <span>JavaScript</span>
              </div>
              <div className="project-description">
                <p>Direct-to-consumer agricultural e-commerce platform connecting farmers with buyers.</p>
                <ul>
                  <li>Built full-stack platform using Django and PostgreSQL with 98% uptime</li>
                  <li>Implemented NLP chatbot reducing customer service response time by 40%</li>
                  <li>Developed dynamic cart system handling 500+ concurrent transactions</li>
                  <li>Integrated PayPal payment gateway with fraud detection mechanisms</li>
                  <li>Created personalized coupon system boosting user retention by 25%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title light">
              <span className="section-title-text">Let's Connect</span>
            </h2>
            <div className="contact-wrapper">
              <div className="contact-card">
                <div className="contact-methods">
                  <a href="mailto:shetvi05@gmail.com" className="contact-method">
                    <Mail size={20} /> shetvi05@gmail.com
                  </a>
                  <a href="tel:519-816-5434" className="contact-method">
                    <Phone size={20} /> +1 (519) 816-5434
                  </a>
                </div>
                <div className="social-links">
                  <a href="https://linkedin.com/in/hetvi-shah-6277311a7" target="_blank" rel="noopener noreferrer" className="social-link">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://github.com/hetvishah1005" target="_blank" rel="noopener noreferrer" className="social-link">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} Hetvi Shah. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button onClick={scrollToTop} className={`back-to-top ${isScrolled ? 'active' : ''}`}>
        <ChevronUp size={24} />
      </button>
    </div>
  );
}

export default App;