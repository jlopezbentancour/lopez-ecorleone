import React from 'react'
import './styles.css'
import CartWidget from '../CartWidget'
import ItemListContainer from '../ItemListContainer'


const NavBar = () => {
  return (
   <>
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
     <CartWidget/>
     
  </nav>
  
    <ItemListContainer/>
    </>
  )

}

export default NavBar