import { NavLink } from 'react-router-dom'
import Links from '../utils/links'

const NavLinks = ({ toggleSidebar }) => {
  //toggleSidebar is function that we pass in
  return (
    <div className="nav-links">
      {Links.map((link) => {
        const { text, path, id, icon } = link
        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link'
            }}
            key={id}
            onClick={toggleSidebar}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks
