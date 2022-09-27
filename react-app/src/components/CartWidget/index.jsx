import React from 'react'
import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Shop } from '../../context/ShopProvider';
import './styles.css'
import {Link} from 'react-router-dom'



const CartWidget = () => {
  const {totalProducts} = useContext(Shop)
  


 return (
    
   <div className='Iconito'>
    <Link to="/cart">
    <button className='carritown'><FaShoppingCart/></button>
    <span>{totalProducts() || ''}</span>
    </Link>
   
    </div>
  )
}

export default CartWidget