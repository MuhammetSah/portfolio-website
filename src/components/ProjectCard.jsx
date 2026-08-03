import { Link } from 'react-router-dom'

function ProjectCard({ image, imageAlt, title, description, tags, github, demo, variant = 'detail', workLink }) {
  return (
    <div className={`project-card project-card--${variant}`}>
      <img src={image} alt={imageAlt} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      {tags && (
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}
      <div className="links">
        {variant === 'teaser' ? (
          <Link to={workLink}>View project →</Link>
        ) : (
          <>
            {github && <a href={github} target="_blank" rel="noreferrer">GitHub</a>}
            {demo && <a href={demo} target="_blank" rel="noreferrer">Live Demo</a>}
          </>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
