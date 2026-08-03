import { Link } from 'react-router-dom'
import profileImg from '../assets/profile.jpg'
import ticketSystemImg from '../assets/ticket-system-preview.png'
import replyTrackerImg from '../assets/reply-tracker-preview.png'
import ProjectCard from '../components/ProjectCard'

function Home() {
  return (
    <>
      <section className="hero">
        <span className="eyebrow">Web Developer in Transition</span>
        <h1>Bridging customer support and web development</h1>
        <p className="hero-subtext">
          I'm Muhammet — bringing years of process thinking, quality management, and IT support
          experience into building full-stack web apps.
        </p>
        <Link to="/about" className="hero-cta">
          <img src={profileImg} alt="" />
          <span>About – Muhammet Sahin</span>
        </Link>
      </section>

      <section className="featured">
        <span className="eyebrow">Featured Work</span>
        <div className="project-list">
          <ProjectCard
            variant="teaser"
            image={ticketSystemImg}
            imageAlt="Support Ticket System login screen"
            title="Support Ticket System"
            description="A full-stack support ticket app with authentication, role-based permissions, and live updates."
            workLink="/work"
          />
          <ProjectCard
            variant="teaser"
            image={replyTrackerImg}
            imageAlt="Reply Tracker login screen"
            title="Reply Tracker"
            description="Track whether you've already replied to a message, built with Flask and SQLite."
            workLink="/work"
          />
        </div>
        <Link to="/work" className="see-all-link">See all projects →</Link>
      </section>
    </>
  )
}

export default Home
