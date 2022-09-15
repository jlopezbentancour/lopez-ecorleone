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


/*   useEffect(() => {
//el array de dependencias vacio implica que el callback 
//se ejecutara cuando se MONTA el componente por unica vez
console.log('se monto el itemcount');
},[])

//la funcion callback dentro del useeffect y se ejecutara cuando se MONTE el componente
 //, y cuando se ACTUALICE el valor del count
useEffect (() => {
    console.log('se actualiza el estado!')
}, [count]);   */

    return (
    <div className='contador'>
        
        <button onClick={handleAdd}>+</button>
        <h2>{count}</h2>
        <button disabled={count <= 1} onClick={handleDecrement}>-</button>
        
      <div><button onClick={addCart}>Agregar al carrito</button></div>
    </div>
  )
}

export default ItemCount