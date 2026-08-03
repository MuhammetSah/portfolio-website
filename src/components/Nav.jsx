import { NavLink } from 'react-router-dom'
import { HomeIcon, UserIcon, BriefcaseIcon } from './Icons'

const links = [
  { to: '/', label: 'Home', icon: HomeIcon, end: true },
  { to: '/about', label: 'About', icon: UserIcon },
  { to: '/work', label: 'Work', icon: BriefcaseIcon },
]

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-pill">
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <Icon className="nav-icon" />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Nav
