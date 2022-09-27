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
  
<Card>
      <Card.Img variant="top" src={product.image} height="600px"  style={{objectFit: 'cover'}} />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
          <span className='titulor fs-2'>{product.title}</span>
          <span className='ms-2 text-muted'>${product.price}</span>
        </Card.Title>
        
       
        <button onClick={handleNavigate}>Ver mas</button>
      </Card.Body>
    </Card>

    
    
  )
}

export default Item

