import React from 'react'
//import ItemCount from '../ItemCount'
import './styles.css' 
import {useNavigate} from 'react-router-dom'

import Card from 'react-bootstrap/Card';


const Item = ({product}) => {

const navigate = useNavigate();

const handleNavigate = () => {
  navigate(`/detail/${product.id}`)
}






  return (
  
<Card style={{ height: '40rem'}}>
      <Card.Img variant="top" src={product.image} width="10px" height="500px"  style={{objectFit: 'contain'}} />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
          <span className='titulor fs-6'>{product.title}</span>
          <span className='ms-2 text-muted'>${product.price}</span>
        </Card.Title>
        
       
        <button className='btn btn-outline-dark botoncito' type='button' onClick={handleNavigate}>Ver mas</button>
      </Card.Body>
    </Card>

    
    
  )
}

export default Item

