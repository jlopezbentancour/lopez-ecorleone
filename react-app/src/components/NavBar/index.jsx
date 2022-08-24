import React from 'react'
import './styles.css'

const NavBar = () => {
  return (
    
  <nav className='nav'>
    <a href='/' className="site-title">
      Corleone's
    </a>
     <ul>
      <li><a href='/'>Inicio</a></li>
      <li><a href='/'>Tienda</a></li>
      <li><a href='/'>Nosotros</a></li>
      <li><a href='/'>Contacto</a></li>
    </ul>   

  </nav>
    
  )
}

export default NavBar