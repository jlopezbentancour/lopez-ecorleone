import React from 'react'
import Item from '../Item'

const ItemList = ({products}) => {
  return (
   
  <div className="container">
  <div className="row">
  {products.map((product) => {
    return(
      <div className="col-md-4" key={product.id}>
     <Item product={product}/>
      </div>
      )}) }
</div>
 </div>
  )
}

export default ItemList