import React from 'react'
import './styles.css'
import CartWidget from '../CartWidget'

import Select from '../Select'
import { useState } from 'react'

const NavBar = () => {
  
  const [navColor, setNavColor] = useState("#000000")



  const onChangeColor = (event) => {
    const color = event.target.value;
    setNavColor(color);
  }
   

  console.log(navColor);

  return (
   <>
  <nav style ={{backgroundColor: navColor}} className='nav'>
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
     <Select handleColor={onChangeColor}/>
  </nav>

    
    </>
  )

}

export default NavBar