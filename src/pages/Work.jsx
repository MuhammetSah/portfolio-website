import schedulingToolImg from '../assets/scheduling-tool-preview.png'
import ticketSystemImg from '../assets/ticket-system-preview.png'
import replyTrackerImg from '../assets/reply-tracker-preview.png'
import ProjectCard from '../components/ProjectCard'

function Work() {
  return (
    <section className="work">
      <h1>Work</h1>
      <div className="project-list">
        <ProjectCard
          variant="detail"
          image={schedulingToolImg}
          imageAlt="Shift Scheduling Tool monthly calendar view"
          title="Shift Scheduling Tool"
          description={`An automated shift-scheduling tool for HR teams, built with React and Flask. HR defines employees,
            their availability constraints, and shift types with per-weekday staffing requirements, then generates a
            full monthly schedule via chronological backtracking with branch-and-bound — not a greedy pass — so gaps a
            greedy algorithm would leave get closed and shifts stay balanced across the team. HR can fine-tune the
            result by hand afterward, including swapping shifts between employees. Role-based access keeps employees
            to a read-only view of their own shifts, and every write is enforced by the API, not just hidden in the UI.`}
          tags={['React', 'React Router', 'Flask', 'SQLite', 'PostgreSQL', 'Flask-CORS', 'Werkzeug', 'Backtracking Algorithm']}
          github="https://github.com/MuhammetSah/scheduling-tool"
        />
        <ProjectCard
          variant="detail"
          image={ticketSystemImg}
          imageAlt="Support Ticket System login screen"
          title="Support Ticket System"
          description={`A full-stack web application for managing support tickets, built with React and Flask.
            Users can register and log in with hashed passwords and session-based authentication, then
            create tickets with their contact details and track their status. Role-based permissions
            let the ticket creator change its status, while only an admin user can add a solution.
            The ticket list refreshes automatically after creating a new ticket, with no page reload required.`}
          tags={['React', 'React Router', 'Flask', 'SQLite', 'Flask-CORS', 'Werkzeug', 'Vercel', 'Render']}
          github="https://github.com/MuhammetSah/ticket-system"
          demo="https://ticket-system-two-ivory.vercel.app"
        />
        <ProjectCard
          variant="detail"
          image={replyTrackerImg}
          imageAlt="Reply Tracker login screen"
          title="Reply Tracker"
          description={`A web application that allows users to track whether or not they have already replied to a
            message. It was developed using Flask, SQLite, and Python. The application enables users to create
            an account, log in, and log out. Users can flag their messages as replied or not replied. The
            software sorts the messages from oldest to newest, and users can modify the list by deleting a
            single contact or the whole account.`}
          tags={['Flask', 'SQLite', 'Python']}
          github="https://github.com/MuhammetSah/reply-tracker.git"
          demo="https://youtu.be/WkqX6y5o-_w"
        />
      </div>
    </section>
  )
}

export default Work
