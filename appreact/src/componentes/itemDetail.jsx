import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ItemQuantitySelector } from './ItemQuantitySelector';

import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const ItemDetail = ({ item }) => {
  const {addItem} = useContext(CartContext);

  const add = (count) => {
    addItem(item, count);
  }
  
  return (
    <div className="card-container">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.imageId} />
        <Card.Body>
          <Card.Title style={{ fontSize: '2rem' }}>{item.title}</Card.Title>
          <Card.Text>${item.price}</Card.Text>
          <Card.Text>Stock: {item.stock}</Card.Text>
          <Card.Text>
            <ItemQuantitySelector stock={item.stock} item={item.id} onAdd={add}/>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
