import react, { useState } from 'react'
import '../css/navbar.css'
import { HashLink as Link } from 'react-router-hash-link'

import React from 'react'

function Navbar() {
  const [click, setclick] = useState(false)
  const handleClick = () => setclick(!click)
  const closeMobileMenu = () => setclick(false)

  return (
    <div className="navbar">
      <Link to="#about" className="nav-logo" onClick={closeMobileMenu}>
        Modular South
      </Link>

      <div className="hamburger-button" onClick={handleClick}>
        <img src={click ? 'close.png' : 'hamburger.png'} />
      </div>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/#about" className="nav-link" onClick={closeMobileMenu}>
            About
          </Link>
        </li>

        <li>
          <Link to="/services" className="nav-link" onClick={closeMobileMenu}>
            Services
          </Link>
        </li>

        <li>
          <Link to="/Gallery" className="nav-link" onClick={closeMobileMenu}>
            Gallery
          </Link>
        </li>

        <li>
          <Link to="/Contact" className="nav-link" onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
