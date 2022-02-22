import { NavLink } from "react-router-dom"
import { useIsMobile } from "../../contexts/IsMobileContext"

//CSS import
import './Nav.css'

export default function Nav() {
  const { isMobile } = useIsMobile()

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
      <div className="nav_links">
        {!isMobile && nav_elements.map(link => (
          <NavLink key={link.name} to={link.to}>
            {link.name}
          </NavLink>
        ))}
        {isMobile && 
        
        }
      </div>
    </nav>
  )
}
