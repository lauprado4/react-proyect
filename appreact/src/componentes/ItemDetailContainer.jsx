import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import React from 'react';
import { useParams } from "react-router-dom";
import data from "../data/products.json";
import "./ItemDetailContainer.css"

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  
  const {id} = useParams()

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
       setTimeout(() => resolve(data), 2000);
    })

    get.then((data) => {
        const filter = data.find(prod => prod.id === Number(id));
        setItem(filter);
      })
  }, [id]); 

  if (!item) return <div>Cargando los productos...</div>;

  return (
      <div className="card-container">
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title style={{ fontSize: '2rem'}}>{item.name}</Card.Title>
        <Card.Text>
          <div className="button-container">
            <p>Cantidad: </p>
            <div className="cart-button">
            <button className="btn btn-primary">-</button>
            <p>1</p>
            <button className="btn btn-primary">+</button>
            </div> 
          </div>
        </Card.Text>
        <Card.Text>${item.price}</Card.Text>
        <Link to={`/item/${item.id}`}><Button variant="primary" className="button-buy">Comprar</Button></Link>
      </Card.Body>
    </Card>
      </div>
  )
}

