import React from 'react'
import Item from '../Item'

const ItemList = ({characters}) => {
  return (
   
  <div className="container">
  <div className="row">
  {characters.map((character) => {
    return(
      <div className="col-md-4" key={character.id}>
     <Item character={character}/>
      </div>
    )
  })}



  </div>


  </div>
  )
}

export default ItemList