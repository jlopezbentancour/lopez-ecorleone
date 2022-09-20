import React, {useState} from 'react'
import ItemCount from '../ItemCount'
import './styles.css' 
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'



const ItemDetail = ({character}) => {
 
const [qty, setQty] = useState(0);
const navigate = useNavigate()

 const addCart = (quantity) => {
setQty(quantity)


 }
 
 
 
 const handleFinish = () => {
navigate('/cart')

 }
 
 
 
  return (
    <div>
       <Card className='text-center detalles' style={{ width: '18rem' }}>
      <Card.Img  variant="right" src={character.image} className="foto" />
      <Card.Body>
        <Card.Title><p className='textito'>Name:</p> {character.name}</Card.Title>
        <Card.Text className='textoInformacion'><p className='textito'>
        Gender:</p> {character.gender}
        </Card.Text>
        <Card.Text className='textoInformacion'><p className='textito'>Status:</p> ${character.status}</Card.Text>
        <Card.Text className='textoInformacion'><p className='textito'>Specie:</p> {character.species}</Card.Text>
        { !qty ? <ItemCount stock={10} initial={1} onAdd={addCart} /> : <button onClick={handleFinish}>Finalizar Compra</button>}
      </Card.Body>
    </Card>

    </div>
  )
}

export default ItemDetail