import React from 'react'
import ItemCount from '../ItemCount'
import './styles.css'


const ItemListContainer = ({greeting}) => {
  
 const agregarAlCarrito= (cantidad) =>{
console.log(`agregaste ${cantidad} de productos`)
 }
  
  return (
    <>
    <div className='item-list-container'>
       
      <h2>{greeting}</h2>
      <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito}/>
    </div>
    </>
  )
}

export default ItemListContainer
