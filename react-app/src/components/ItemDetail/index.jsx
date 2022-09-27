import React, {useState, useContext} from 'react'
import ItemCount from '../ItemCount'
import './styles.css' 
import Card from 'react-bootstrap/Card';
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
    <div>
       <Card className='text-center detalles' style={{ width: '18rem' }}>
      <Card.Img  variant="right" src={product.image} className="foto" />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text> ${product.price} </Card.Text>
     
        { !qty ? <ItemCount stock={10} initial={1} onAdd={addCart} /> : <button onClick={handleFinish}>Finalizar Compra</button>}
            
      </Card.Body>
    </Card>

    </div>
  )
}

export default ItemDetail