import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
  
const [characterDetail, setCharacterDetail] = useState({})

const {characterId} = useParams()

//console.log(characterId)


useEffect(()=> {
    const getCharacters = async () => {
        try {
           
            const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            const data = await response.json();
            setCharacterDetail(data);
      
        } catch (error) {
            console.log(error)
        }
    }
    getCharacters()
}, [characterId])
    
  
  
  
    return (
    <ItemDetail character={characterDetail}/>
  )
}

export default ItemDetailContainer