//CSS import
import './Nav.css'
//Components
import { NavLink } from "react-router-dom"
import { useIsMobile } from "../../contexts/IsMobileContext"
import { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";


export default function Nav() {
  const { isMobile } = useIsMobile()
  const [menuOpen, setMenuOpen] = useState(false);

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
          <>
            {!menuOpen &&
              <div className="hamburger" onClick={() => setMenuOpen(true)}>
                <HiMenu style={{ width: "100%", height: "100%", color: "var(--color-text-light)" }} />
              </div>
            }
            {menuOpen &&
              <>
                <div className="hamburger" onClick={() => setMenuOpen(false)}>
                  <HiOutlineX style={{ width: "100%", height: "100%", color: "var(--color-text-light)" }} />
                </div>
                <div className='mobile_menu'>
                  {nav_elements.map(link => (
                    <NavLink key={link.name} to={link.to} onClick={() => setMenuOpen(false)}>
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </>
            }

          </>
        }
      </div>
    </nav>
  )
}
