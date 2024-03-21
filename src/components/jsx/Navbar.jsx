import react, { useState } from 'react'
import '../css/navbar.css'
import { HashLink as Link } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'

import React from 'react'

function Navbar() {
  const [click, setclick] = useState(false)
  const handleClick = () => setclick(!click)
  const closeMobileMenu = () => setclick(false)

  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-logo" onClick={closeMobileMenu}>
          Modular South
        </div>

        <div className="hamburger-button" onClick={handleClick}>
          <img src={click ? 'close.png' : 'hamburger.png'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
              About
            </Link>
          </li>

          <li>
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>

          <li>
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
              Gallery
            </Link>
          </li>

          <li>
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  )
}

export default Navbar
