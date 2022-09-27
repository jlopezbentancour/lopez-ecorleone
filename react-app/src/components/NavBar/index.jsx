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
                <Link to="/category/men's clothing">Men's clothing</Link>
            </li>
            <li>
                <Link to="/category/women's clothing">Women's clothing</Link>
            </li>
            <li>
                <Link to="/category/electronics">Electronics</Link>
            </li>
            <li>
                <Link to="/category/jewelery">Jewelery</Link>
            </li>
    </ul>   
     <CartWidget/>
     
     <Select handleColor={onChangeColor}/>
  </nav>

    
    </>
  )

}

export default NavBar