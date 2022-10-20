import React, {useState, useContext} from 'react'
import ItemCount from '../ItemCount'
import './styles.css' 

import {useNavigate} from 'react-router-dom'
import { Shop } from '../../context/ShopProvider';



const ItemDetail = ({product}) => {
 
const [qty, setQty] = useState(0);
const navigate = useNavigate()

const {addItem} = useContext(Shop)



const addCart = (quantity) => {
setQty(quantity)
}
 

 
 const handleFinish = () => {
const productToSave = {...product, quantity: qty}
addItem(productToSave)
  navigate('/cart')

 }
 
 
 
  return (
    <div className='detalle'>
    <div className="col-md-6 px-5">
    <h4 className="text-uppercase text-black-50 text-center">{product.category}</h4>
      <img src={product.image} alt={product.title}
      height="400px" width="400px" />
    </div>
<div className="col-md-6">
  
  <h1 className="display-5">{product.title}</h1>
 <h3 className='display-6 fw-bold my-4'>
  $ {product.price}
 </h3>
 <p className='lead'> Descripción:<br />{product.description}</p>
 
</div>
{ !qty ? <ItemCount stock={product.stock} initial={1} onAdd={addCart} /> : <button className='btn btn-success' onClick={handleFinish}>Finalizar Compra</button>  }

    </div>
  )
}

export default ItemDetail
// 