import React from 'react'
import './styles.css' 

const Item = ({product}) => {
  return (
    
    <div className='cartas'>
      <img src={product.img} alt="productos" width='150px' />
     <h3>{product.name}</h3>
     <p>precio: ${product.precio}</p>
    


    </div>
    
  )
}

export default Item