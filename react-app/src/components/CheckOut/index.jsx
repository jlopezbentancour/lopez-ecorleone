import React from 'react'
import { useState } from 'react';
import './styles.css' 
import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config'
import { doc, updateDoc } from "firebase/firestore";
import {Shop} from '../../context/ShopProvider'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import ordenGenerada from '../../services/generarOrden'
import Swal from 'sweetalert2'





const CheckOut = () => {

const {cart, totalPrice, clearCart} = useContext(Shop)  

const [nombre, setNombre] = useState('');
const [email, setEmail] = useState('');
const [telefono, setTelefono] = useState('');
const [direccion, setDireccion] = useState('')




const handleSubmit = event => {
 
  event.preventDefault();
}



const navigate = useNavigate()

const handleBuy = async () =>{

  const importeTotal = totalPrice();
  
  const orden = ordenGenerada(nombre, email, telefono, direccion ,cart, importeTotal);
  
  console.log(orden)
  navigate('/')
  
  
  
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
  
  
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: `Orden generada con ID: ${docRef.id}`,
    showConfirmButton: false,
    timer: 3500
  })
  
  
  
  clearCart()
  
  
  
  }
  

return (
    <>
    <form onSubmit={handleSubmit} className="row formulario">
      <div className="col-md-2">
        <input 
        
        placeholder='Nombre'
        id='nombre'
        name='nombre'
        onChange={event => setNombre(event.target.value)} 
        value={nombre}
        className='form-control'
        />
        
      </div>

      <div className="col-md-2">
        <input 
        placeholder='email'
        id='email'
        name='email'
        onChange={event => setEmail(event.target.value)} 
        value={email}
        className='form-control'
        
/>
        
      </div>
   
   
      <div className="col-md-2">
        <input 
        placeholder='telefono'
        id='telefono'
        name='telefono'
        onChange={event => setTelefono(event.target.value)} 
        value={telefono}
        className='form-control'
        type='number'/>
        
      
      </div>

      <div className="col-md-2">
        <input 
        placeholder='direccion'
        id='direccion'
        name='direccion'
        onChange={event => setDireccion(event.target.value)} 
        value={direccion}
        className='form-control'/>
      
      </div>
   
   <div className='col-md-2'> <button type='submit' onClick={handleBuy} className='btn btn-primary'>Confirmar compra</button></div>
  
   
  
   
    </form>
     </>
 
  )
}

export default CheckOut