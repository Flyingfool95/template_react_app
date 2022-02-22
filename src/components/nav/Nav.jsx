import { NavLink } from "react-router-dom"
import './Nav.css'

export default function Nav() {

  const nav_elements = [
    {
      name: "Home",
      to: "/"
    },
    {
      name: "About",
      to: "/about"
    },
  ]

  return (
    <nav>
        {nav_elements.map(link => (
          <NavLink key={link.name} to={link.to}>
            {link.name}
          </NavLink>
        ))}
    </nav>
  )
}
