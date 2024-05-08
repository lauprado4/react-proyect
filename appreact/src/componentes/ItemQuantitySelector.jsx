import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const ItemQuantitySelector = ({ stock, item, onAdd }) => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (stock > count) setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const handleAdd = () => {
    onAdd(count);
    setCount(1);
  };

  return (
    <>
      <div className="button-container">
                <h4>Cantidad: </h4>
                <div className="cart-button">
                  <Button className="btn btn-primary" style={{ fontSize: '1.5rem', backgroundColor: "#222569", borderColor: "#222569" }} onClick={handleDecrease}>-</Button>
                  <h5 style={{ margin: '3px 8px ' }} value={count}>{count}</h5>
                  <Button className="btn btn-primary" style={{ fontSize: '1.5rem', backgroundColor: "#222569", borderColor: "#222569" }} onClick={handleIncrease}> + </Button>
                </div>
              </div>
              <Link to={`/item/${item.id}`}>

            <Button
              type='button'
              variant="primary"
              className="button-buy"
              onClick={handleAdd}
              style={{backgroundColor: "#222569", borderColor: "#222569", margin: "15px 0 15px 0"}}
            >
              Agregar al carrito
            </Button>
          </Link>     
    </>
  );
};
