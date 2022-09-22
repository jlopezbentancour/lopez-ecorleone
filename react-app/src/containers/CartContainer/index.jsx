import React from 'react'
import { Shop } from '../../context/ShopProvider';
import { useContext } from 'react';



const CartContainer = ({character}) => {
  const {clearCart, removeItem} = useContext(Shop)

  

  return (
    <>
    
    <button onClick={clearCart}>Limpialo</button>
    <button onClick={removeItem}></button>
    
    
    
    </> 
  )


}

export default CartContainer