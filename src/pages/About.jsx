import profileImg from '../assets/profile.jpg'
import { GithubIcon, LinkedinIcon, MailIcon } from '../components/Icons'

function About() {
  return (
    <>
      <section className="about-hero">
        <img src={profileImg} alt="Muhammet Sahin" className="profile-img" />
        <h1>Muhammet Sahin</h1>
        <p className="role">Web Developer in Transition</p>
        <div className="social-icons">
          <a href="https://github.com/MuhammetSah" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/muhammet-mustafa-sahin-979946236/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href="mailto:Muhammet.Sahin@gmx.net" aria-label="E-Mail">
            <MailIcon />
          </a>
        </div>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I come from a customer service background, where I currently work as a quality manager,
          process manager, and in IT support. Drawing on this experience with processes and
          technical support, I am now making a targeted transition into web development.
        </p>
      </section>

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

      <section className="contact">
        <h2>Contact</h2>
        <p>Let's get in touch!</p>
        <div className="contact-links">
          <a href="mailto:Muhammet.Sahin@gmx.net">E-Mail</a>
          <a href="https://github.com/MuhammetSah" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/muhammet-mustafa-sahin-979946236/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>
    </>
  )
}

export default About
