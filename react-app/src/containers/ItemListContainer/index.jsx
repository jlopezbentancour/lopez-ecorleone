import React, {useState} from 'react'
//import { FaClosedCaptioning } from 'react-icons/fa'
//import ItemCount from '../ItemCount'
import './styles.css'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'
import ItemList from '../../components/ItemList'



const ItemListContainer = ({greeting}) => {
  
// La promise se ejecuta una uniica vez cuando se monta el componente  
const [characters, setCharacters] = useState([])

const {resultsId} = useParams();






  useEffect(()=>{
const getItems = async () => {
try {
  if(resultsId){
    const response = await fetch(`https://rickandmortyapi.com/api/character/?gender=${resultsId}`)
    const data = await response.json();
    setCharacters(data.results)


  }else{
    const response = await fetch(`https://rickandmortyapi.com/api/character`)
    const data = await response.json();
    setCharacters(data.results)

  }


} catch (error) {
  console.log(error)
}


}
getItems()
}, [resultsId])
    


//console.log(characters)

  return (
    <>
    <div className='item-list-container'>
       
    <ItemList characters={characters}/>
      
    </div>
    </>
  )
}

export default ItemListContainer
