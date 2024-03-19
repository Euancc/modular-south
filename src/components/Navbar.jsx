import react, { useState } from 'react'
import '../css/Navbar.css'
import { HashLink as Link } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'

import React from 'react'

function Navbar() {
const [click, setclick] = useState(false)
const handleClick = () => setclick(!click)
const closeMobileMenu = () => setclick(false)

  return (
    <BrowserRouter>
    <nav className='navbar'>
      <div className='nav-logo' onClick={closeMobileMenu}>
        Modular South
      </div>

<div className='hamburger-menu' onClick={handleClick}>
  <img src={click ? 'close.png' : 'hamburger.png'} />
</div>

    </nav>
    </BrowserRouter>
  )
}

export default Navbar