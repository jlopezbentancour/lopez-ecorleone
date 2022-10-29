import React from 'react'
import './styles.css' 
import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config'
import { doc, updateDoc } from "firebase/firestore";
import {Shop} from '../../context/ShopProvider'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import ordenGenerada from '../../services/generarOrden'
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { edadValidator } from "../../services/validator";



const CheckOut = () => {

const {cart, totalPrice, clearCart} = useContext(Shop)  




const {register, formState: { errors }, handleSubmit, getValues } = useForm({
  defaultValues:{
    nombre:'',
    email:'',
    telefono:'',
    direccion:''

  }
})


const onSubmit = (data) => {
  console.log(data)
}



const navigate = useNavigate()

const handleBuy = async () =>{

  const importeTotal = totalPrice();
  const values = getValues()
  
  const orden = ordenGenerada(values.nombre, values.email, values.telefono, values.direccion,cart, importeTotal);
  
 
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
   <h2 className='checautero'>Checkout</h2>
 <div className="formuleta">
 
  <form onSubmit={handleSubmit(onSubmit)}>
  <div>
                <label>Nombre</label>
                <input type="text" 
                
              
                {...register('nombre', {
                    required: true,
                    maxLength: 10
                })} />
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
            </div>
    <div>
    <label>Direccion</label>
    <input type="text" {...register('Direccion')} />
    </div>
    <div>
                <label>Edad</label>
                <input type="text" {...register('edad', {
                    validate: edadValidator
                })} />
                {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
            </div>
    <div>
                <label>Email</label>
                <input type="text" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    required: true
                })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>
          
               
               <div>
            <label >telefono</label>
            <input type="number" {...register('telefono', {
              required: true
            })} />
               {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
            </div> 
           

    <button  className='botoncito btn btn-primary' type='submit' onClick={handleSubmit(handleBuy)}>Enviar</button>
  </form>
  </div>
  </>
 
  )
}

export default CheckOut