import React from 'react'
//import ItemCount from '../ItemCount'
import './styles.css' 
import {useNavigate} from 'react-router-dom'

//import Card from 'react-bootstrap/Card';


const Item = ({character}) => {

const navigate = useNavigate();

const handleNavigate = () => {
  navigate(`detail/${character.id}`)
}






  return (
  
<div className="text-center p-5" onClick={handleNavigate}>
<h3>{character.name}</h3>
<img className='img-fluid rounded-pill' src={character.image} alt={character.name} />
<p>{character.origin.name}</p>
<button>Ver mas</button>
</div>

    
    
  )
}

export default Item

