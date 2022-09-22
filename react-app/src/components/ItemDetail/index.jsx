import React, {useState, useContext} from 'react'
import ItemCount from '../ItemCount'
import './styles.css' 
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'
import { Shop } from '../../context/ShopProvider';



const ItemDetail = ({character}) => {
 
const [qty, setQty] = useState(0);
const navigate = useNavigate()

const {addItem} = useContext(Shop)



const addCart = (quantity) => {
setQty(quantity)
}
 
 
 
 const handleFinish = () => {
const productToSave = {...character, quantity: qty}
addItem(productToSave)
  navigate('/cart')

 }
 
 
 
  return (
    <div>
       <Card className='text-center detalles' style={{ width: '18rem' }}>
      <Card.Img  variant="right" src={character.image} className="foto" />
      <Card.Body>
        <Card.Title>Name:{character.name}</Card.Title>
        <Card.Text> Gender:{character.gender} </Card.Text>
        <Card.Text>Status${character.status}</Card.Text>
        <Card.Text>Specie:{character.species}</Card.Text>
        { !qty ? <ItemCount stock={10} initial={1} onAdd={addCart} /> : <button onClick={handleFinish}>Finalizar Compra</button>}
            
      </Card.Body>
    </Card>

    </div>
  )
}

export default ItemDetail