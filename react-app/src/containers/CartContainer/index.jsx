
import React from 'react'
import { useContext } from 'react'
import {Shop} from '../../context/ShopProvider'
import {Link} from 'react-router-dom'
import ItemCart from '../../components/ItemCart'
import './styles.css'
import { useNavigate } from "react-router-dom";






const Cart = (product) => {

  

  const {cart, totalPrice, clearCart} = useContext(Shop)

  const navigate = useNavigate()

  

  if(cart.length === 0) {

    return(

      <>

      <p>No hay nada</p>

      <Link to="/">Comprar</Link>

      </>

    )

  }

  

const irAlCheckout = () => {
  navigate('/CheckOut')

}











  return (

 <>

 {cart.map(product => <ItemCart key={product.id} product={product}/>)}

 <div className='botones'>

 <p>total: ${totalPrice()}</p>

 <button onClick={() => clearCart(product.id)}>Limpiar Carrito</button>

 <button onClick={irAlCheckout}>Terminar Compra</button>

 </div>



 </>

   

  )

}



export default Cart