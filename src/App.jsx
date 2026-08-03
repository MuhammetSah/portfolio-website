import './App.css'
import profileImg from './assets/profile.jpg'
import ticketSystemImg from './assets/ticket-system-preview.png'
import replyTrackerImg from './assets/reply-tracker-preview.png'

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <h1>Muhammet Sahin</h1>
      <p>Web Developer in Transition</p>
      <button onClick={scrollToProjects}>View Projects</button>
    </section>
  )
}

function About() {
  return (
    <section className="about">
      <img src={profileImg} alt="Muhammet Sahin" className="profile-img" />
      <h2>About Me</h2>
      <p>
        I come from a customer service background, where I currently work as a quality manager,
        process manager, and in IT support. Drawing on this experience
        with processes and technical support, I am now making a targeted transition into
        web development.
      </p>
    </section>
  )
}

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-group">
          <h3>Technical</h3>
          <div className="tags">
            <span>React</span>
            <span>Flask</span>
            <span>Python</span>
            <span>SQLite</span>
            <span>HTML/CSS</span>
            <span>JavaScript</span>
            <span>C/C++</span>
          </div>
        </div>
        <div className="skill-group">
          <h3>From Customer Service</h3>
          <div className="tags">
            <span>Process Thinking</span>
            <span>Quality Management</span>
            <span>IT Support</span>
            <span>Problem Solving Skills</span>
            <span>Leadership Skills</span>
            <span>Quick comprehension</span>
            <span>Strong communication skills</span>
            <span>Project Management</span>
            <span>Analytical Thinking Skills</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <img src={ticketSystemImg} alt="Support Ticket System login screen" className="project-image" />
          <h3>Support Ticket System</h3>
          <p>
            A full-stack web application for managing support tickets, built with React and Flask.
            Users can register and log in with hashed passwords and session-based authentication, then
            create tickets with their contact details and track their status. Role-based permissions
            let the ticket creator change its status, while only an admin user can add a solution.
            The ticket list refreshes automatically after creating a new ticket, with no page reload required.
          </p>
          <div className="tags">
            <span>React</span>
            <span>React Router</span>
            <span>Flask</span>
            <span>SQLite</span>
            <span>Flask-CORS</span>
            <span>Werkzeug</span>
            <span>Vercel</span>
            <span>Render</span>
          </div>
          <div className="links">
            <a href="https://github.com/MuhammetSah/ticket-system" target="_blank">GitHub</a>
            <a href="https://ticket-system-two-ivory.vercel.app" target="_blank">Live Demo</a>
          </div>
        </div>
        <div className="project-card">
          <img src={replyTrackerImg} alt="Reply Tracker login screen" className="project-image" />
          <h3>Reply Tracker</h3>
          <p>
            A web application that allows users to track whether or not they have already replied to a message.
            It was developed using Flask, SQLite, and Python. The application enables users to create an account, log in, and log out.
            User can flag their messages as replied or not replied. The software sorts the messages by oldest to newest.
            User also can modify the list by deleting the user or the whole account.
          </p>
          <div className="tags">
            <span>Flask</span>
            <span>SQLite</span>
            <span>Python</span>
          </div>
          <div className="links">
            <a href="https://github.com/MuhammetSah/reply-tracker.git" target="_blank">GitHub</a>
            <a href="https://youtu.be/WkqX6y5o-_w" target="_blank">Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>Let's get in touch!</p>
      <div className="contact-links">
        <a href="mailto:Muhammet.Sahin@gmx.net">E-Mail</a>
        <a href="https://github.com/MuhammetSah" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/muhammet-mustafa-sahin-979946236/" target="_blank">LinkedIn</a>
      </div>
    </section>
  )
}

export default App