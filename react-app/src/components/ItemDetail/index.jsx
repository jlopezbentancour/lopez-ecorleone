import React from 'react'
import ItemCount from '../ItemCount'
import './styles.css' 
import Card from 'react-bootstrap/Card';

const ItemDetail = ({character}) => {
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
        <ItemCount stock={10} initial={1} />
      </Card.Body>
    </Card>

    </div>
  )
}

export default ItemDetail