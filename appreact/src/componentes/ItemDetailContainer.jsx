import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"
import { getFirestore, doc, getDoc, collection, query, where } from "firebase/firestore";
import { ItemDetail } from "./itemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  
  const {id} = useParams()

  useEffect(() => {
      const database = getFirestore();
      const refDocument = doc(database, "items", id);
      
      getDoc(refDocument).then((snapshot) => {
          setItem({id: snapshot.id, ...snapshot.data()});
      });
  }, []); 

  if (!item) return <div>Cargando los productos...</div>;

  return (
      <ItemDetail item={item}/>
  )
}

