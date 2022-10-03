import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail";
import {useParams} from 'react-router-dom';
import { doc, getDoc} from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})

    const {productId} = useParams();

   
    
   
    useEffect(()=> {

        const getProducts = async () => {
            try {
                //Referencia del doc
                const docRef = doc(db, "products", productId);
                //peticion a firebase
                const docSnap = await getDoc(docRef);
                
            
                if (docSnap.exists()) {
                  
                  setProductDetail({id: docSnap.id, ...docSnap.data()})
                } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
                 
                }





                // const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                // const data = await response.json();
                // setProductDetail(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();

    }, [productId])

    

    return <ItemDetail product={productDetail}/>;
};

export default ItemDetailContainer;