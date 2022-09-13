import React from 'react'
//import ItemCount from '../ItemCount'
import './styles.css' 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({product}) => {
  return (
  
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.image}/>
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
       {product.description}
      </Card.Text>
      
      <Card.Text>${product.price}</Card.Text>
      <Button variant="primary">Agregar</Button>
    </Card.Body>
  </Card>
    
    
  )
}

export default Item

