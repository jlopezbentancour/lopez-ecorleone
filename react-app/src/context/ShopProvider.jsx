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
const cartModified = cart.map(product => {
  if(product.id === item.id){
   product.quantity += item.quantity
   return product
  }
  return product 
})

setCart(cartModified)
}else{

  const cartModificado = [...cart, item]
  setCart(cartModificado)

}

}

const isInCart = (id) =>{
  return cart.some(product => product.id === id)
}

const removeItem = (id) => {
setCart(cart.filter(product => product.id !== id))
}

const clearCart = () => {
  setCart([])
}

const totalPrice = () => {
  return cart.reduce((prev, act)=> prev + act.quantity * act.price, 0)
}

const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)




    return (
    
    <Shop.Provider value={{cart, addItem, clearCart, removeItem, totalPrice, totalProducts}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider