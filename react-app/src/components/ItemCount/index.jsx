import React from 'react'
import './styles.css' 
import { useState } from 'react';



const ItemCount = ({stock, initial, onAdd}) => {
 
const [count, setCount] = useState(initial);
 
const handleAdd = () => {
setCount(count + 1)
if(count >= stock){
  alert('no hay mas stock')
  setCount(stock)
}
}

const handleDecrement = () => {
  setCount(count - 1);

}

const addCart = () =>{
  onAdd(count);
  setCount(initial);
}



    return (
    <div className='contador'>
        
        <button onClick={handleAdd}>+</button>
        <h2>{count}</h2>
        <button disabled={count <= 1} onClick={handleDecrement}>-</button>
        
      <div className='elbotones'><button onClick={addCart}>Agregar al carrito</button></div>
    </div>
  )
}

export default ItemCount