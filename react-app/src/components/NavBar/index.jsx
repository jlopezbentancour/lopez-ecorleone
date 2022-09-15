import React from 'react'
import './styles.css'
import CartWidget from '../CartWidget'

import Select from '../Select'
import { useState } from 'react'
import { Link } from 'react-router-dom';
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


      <li>
        <Link to="/">Home</Link>
        </li>
      <li>
        <Link to="/results/male">Male</Link>
        </li>
      <li>
        <Link to="/results/female">Female</Link>
        </li>
      <li>
        <Link to="/results/genderless">Genderless</Link>
        </li>
        <li> 
          <Link to="/results/unknown">Unknown
          </Link>
        </li>
    </ul>   
     <CartWidget/>
     <Select handleColor={onChangeColor}/>
  </nav>

    
    </>
  )

}

export default NavBar