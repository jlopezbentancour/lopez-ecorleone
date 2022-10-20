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
   <div className="container">
    <div className="row">
      <div className="col-lg-2 botonaso">
      <button className='btn btn-outline-danger' onClick={handleAdd}>+</button>
      </div>
      <div className="col-lg-2">
      <h2>{count}</h2>
      </div>
      <div className="col-lg-2 botonaso">
      <button className='btn btn-outline-danger' disabled={count <= 1} onClick={handleDecrement}>-</button>
      </div>
      <div>
      <button className='elbotones btn btn-outline-success' onClick={addCart}>Agregar al carrito</button>
      </div>
    </div>
   </div>
  )
}

export default ItemCount