import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList";
import {useParams} from 'react-router-dom';
import { db } from "../../firebase/config";
import { collection, query, getDocs, where } from "firebase/firestore";



const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);

    const {categoryId} = useParams();

   

    useEffect(() => {
        (async () => {
            try {

                 
                //se genera la query
    const q = categoryId ?  
    query(collection(db, "products"), where("category", "==", categoryId))
    :
    query(collection(db, "products"));
    
    //se realiza el llamado a firebase
         const querySnapshot = await getDocs(q);
         const productosFirebase = []
        
         //obtiene el snapshot
         querySnapshot.forEach((doc) => {
      
            // doc.data() is never undefined for query doc snapshots
      
      productosFirebase.push({id: doc.id, ...doc.data()}) 
    
    });
    setProductos(productosFirebase)
                  
                 
              
            } catch (error) {
                console.log(error);
            }
        })();
    }, [categoryId]);

    return <ItemList products={productos} />;
};

export default ItemListContainer;
