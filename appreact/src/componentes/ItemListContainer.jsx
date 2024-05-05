import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import data from "../data/products.json";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";


export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)
  const {id} = useParams();

  useEffect(() => {
      const database = getFirestore();
      
      let refCollection;
      
      if(!id) {
        refCollection = collection(database, "items");
      } 
      else {
        refCollection = query(collection(database, "items"), where ("categoryId", "==" , id))
      }
      
      
      getDocs(refCollection).then((snapshot) => {
        setItems(
          snapshot.docs.map((doc) => {
          return {id: doc.id, ...doc.data()};
        })
      )
      })  
  }, [id])
  
  return (
      <div className="card-container">
        <ItemList items={items} />
      </div>

  )
}

