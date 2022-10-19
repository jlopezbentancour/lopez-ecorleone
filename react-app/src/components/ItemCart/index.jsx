import React from 'react'
import {Shop} from '../../context/ShopProvider'
import './styles.css'
import { useContext } from 'react'


const ItemCart = ({product}) => {
 
 
    const {removeItem} = useContext(Shop)
 
    return (
   
   
   <div className='ItemCart'>
    <img src={product.image} alt={product.title} width='100px' />
  <div>
    <p>{product.title}</p>
    <p>Cantidad: {product.quantity}</p>
    <p>Subtotal: ${product.quantity * product.price}</p>
    <button onClick={() => removeItem(product.id)}>Eliminar</button>
    
  </div>
  
  </div>
  
  )
}

export default ItemCart