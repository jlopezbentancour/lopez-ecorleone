import { doc, updateDoc } from "firebase/firestore";
import React from 'react'
import { useContext } from 'react'
import {Shop} from '../../context/ShopProvider'
import {Link} from 'react-router-dom'
import ItemCart from '../../components/ItemCart'
import './styles.css'
import ordenGenerada from '../../services/generarOrden'
import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config'



const Cart = (product) => {
  
  const {cart, totalPrice, clearCart} = useContext(Shop)
  
  
  if(cart.length === 0) {
    return(
      <>
      <p>No hay nada</p>
      <Link to="/">Comprar</Link>
      </>
    )
  }
  
const handleBuy = async () =>{
const importeTotal = totalPrice();
const orden = ordenGenerada("Juan cruz", "juan@gmail.com", 1111111,cart, importeTotal);
console.log(orden)

// Add a new document with a generated id.
const docRef = await addDoc(collection(db, "orders"), orden);



// Actualizar stock
cart.forEach( async (productoEnCarrito) => {
  //Accedemos a la referencia del product
  const productRef = doc(db, "products", productoEnCarrito.id);
  //Snapshot, llamando firebase
  const productSnap = await getDoc(productRef);
  //snapshot.data devuelve la informacion del documento a actualizar
  await updateDoc(productRef, {
    stock: productSnap.data().stock - productoEnCarrito.quantity,
    
  })
  
});




alert(`Orden generada con ID: ${docRef.id}`);

}




  return (
 <>
 {cart.map(product => <ItemCart key={product.id} product={product}/>)}
 <div className='botones'>
 <p>total: ${totalPrice()}</p>
 <button onClick={() => clearCart(product.id)}>Limpiar Carrito</button>
 <button onClick={handleBuy}>Terminar Compra</button>
 </div>

 </>
   
  )
}

export default Cart