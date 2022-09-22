import React from 'react';
import { createContext, useState} from 'react';
 
//Declarar el context
export const Shop = createContext(null)


//Crear el provider que envuelve la aplicacion
const ShopProvider = ({children}) => {

const [cart, setCart] = useState([])

const addItem = (item) => {
  const existe = isInCart(item.id)
  
if(existe) {
const cartModified = cart.map(character => {
  if(character.id === item.id){
   character.quantity += item.quantity
   return character
  }
  return character 
})

setCart(cartModified)
}else{

  const cartModificado = [...cart, item]
  setCart(cartModificado)

}

}

const isInCart = (id) =>{
  return cart.some(character => character.id === id)
}

const removeItem = (id) => {
setCart(cart.filter(character => character.id !== id))
}

const clearCart = () => {
  setCart([])
}




    return (
    
    <Shop.Provider value={{cart, addItem, clearCart, removeItem}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider