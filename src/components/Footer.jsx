import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Muhammet Sahin</p>
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
    </footer>
  )
}

export default Footer
