import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import data from "../data/products.json";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {
  const [items, setItems] = useState([])

  const {id} = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
       setTimeout(() => resolve(data), 2000);

    })
    get.then((data) => {
      if(!id){
        setItems(data);
      }
      else{
        const filtered = data.filter(p => p.category === id);
        setItems(filtered);
      }
     })
  }, [id])

  return (
      <div className="card-container">
        <ItemList items={items} />
      </div>

  )
}

