import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import './Cart.css';

const initialValues = {
  name: '',
  email: '',
  phone: '',
};

export const Cart = () => {
  const [values, setValues] = useState(initialValues);
  const { clear, items, removeItem } = useContext(CartContext);

  const total = () => items.reduce((acc, i) => acc + i.quantity * i.price, 0);

  const handleChange = (event) => {
    setValues((prev) => {
      return {
        prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = () => {
    const order = {
      buyer: values,
      items: items,
      total: total(),
    };

    const database = getFirestore();
    const orderCollection = collection(database, 'orders');

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert('Su orden: ' + id + ' ha sido completada!');
        }
      })
      .finally(() => {
        clear(), setValues(initialValues);
      });
  };

  const handleRemove = (id) => removeItem(id);

  const handleClear = (id) => clear(id)


  return (
    <>
      <h1>Productos</h1>
      {items.map((i) => {
        return (
          <ul key={i.title}>
            <li>{i.title}</li>
            <li>Cantidad: {i.quantity}</li>
            <li>$ {i.price}</li>
            <li onClick={() => handleRemove(i.id)}>X</li>
          </ul>
        );
      })}
      <div>Total: {total()}</div>
      <Button style={{backgroundColor: "#222569", borderColor: "#222569", margin: "15px 0 15px 0"}} onClick={handleClear}>Vaciar carrito</Button>
      <Button style={{backgroundColor: "#222569", borderColor: "#222569", margin: "15px 0 15px 0", marginLeft: "15px"}} onClick={handleSubmit}>Finalizar compra</Button>
      {items?.length > 0 && (
        <form>
          <label>Nombre completo </label>
          <input
            type="text"
            value={values.name}
            name="Name"
            onChange={handleChange}
          />
          <label>Correo electrónico </label>
          <input
            type="email"
            value={values.email}
            name="Email"
            onChange={handleChange}
          />
          <label>Telefono </label>
          <input
            type="text"
            value={values.phone}
            name="Phone"
            onChange={handleChange}
          />
        </form>
      )}
    </>
  );
};
