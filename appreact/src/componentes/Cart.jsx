import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './Cart.css';

const initialValues = {
  name: '',
  email: '',
  phone: '',
};

export const Cart = () => {
  const [values, setValues] = useState(initialValues);
  const { clear, items } = useContext(CartContext);

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
  return (
    <>
      <h1>Productos</h1>
      {items.map((i) => {
        return (
          <ul key={i.name}>
            <li>{i.name}</li>
            <li>Cantidad: {i.quantity}</li>
            <li>$ {i.price}</li>
          </ul>
        );
      })}
      <div>Total: {total()}</div>
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
          <button type="button" onClick={handleSubmit}>
            Enviar
          </button>
        </form>
      )}
    </>
  );
};
