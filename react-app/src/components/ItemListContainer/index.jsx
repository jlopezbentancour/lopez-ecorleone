import React, {useState} from 'react'
//import { FaClosedCaptioning } from 'react-icons/fa'
//import ItemCount from '../ItemCount'
import './styles.css'
import {products} from '../../data/products'
import { useEffect } from 'react'
import ItemList from '../ItemList'



const ItemListContainer = ({greeting}) => {
  
// La promise se ejecuta una uniica vez cuando se monta el componente  
const [productos, setProductos] = useState([])

  useEffect(()=>{
    
  
      const obtenerProductos = new Promise ((accept, reject)=> {
        setTimeout(() => {
          accept(products)
        }, 3000)
       })
       //IIFE
      obtenerProductos
      .then((result)=>{
        console.log(result)
        setProductos(result)
      })
      .catch((error) => console.log(error))
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
