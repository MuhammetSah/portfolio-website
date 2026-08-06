import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="hero">
      <span className="eyebrow">404</span>
      <h1>Page not found</h1>
      <p className="hero-subtext">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/" className="see-all-link">← Back to home</Link>
    </section>
  )
}

export default NotFound
