import React, {useState} from 'react'
//import { FaClosedCaptioning } from 'react-icons/fa'
//import ItemCount from '../ItemCount'
import './styles.css'

import { useEffect } from 'react'
import ItemList from '../../components/ItemList'



const ItemListContainer = ({greeting}) => {
  
// La promise se ejecuta una uniica vez cuando se monta el componente  
const [productos, setProductos] = useState([])

  useEffect(()=>{
    
  (async ()=> {
  try{
    const response = await fetch('https://fakestoreapi.com/products');
    const productos = await response.json();
    setProductos(productos);

  } catch(error) {
    console.log(error)
  }

  })()
  }, [])

//console.log(products)

  return (
    <>
    <div className='item-list-container'>
       <ItemList products={productos}/>
     
      
    </div>
    </>
  )
}

export default ItemListContainer
