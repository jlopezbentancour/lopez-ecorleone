import React from 'react'
import ItemCount from '../ItemCount'

import Card from 'react-bootstrap/Card';

const ItemDetail = ({product}) => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>${product.price}</Card.Text>
        <Card.Text>{product.category}</Card.Text>
        <ItemCount stock={10} initial={1} />
      </Card.Body>
    </Card>

    </div>
  )
}

export default ItemDetail