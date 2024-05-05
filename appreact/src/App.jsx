import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/NavBar';
import {ItemListContainer} from './componentes/ItemListContainer';
import {ItemDetailContainer} from './componentes/ItemDetailContainer';
import { Provider } from './contexts/CartContext';
import { getFirestore, getDocs, doc, collection, addDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { Cart } from './componentes/Cart';


function App() {
//para traer a todos los elementos de la coleccion
// useEffect(() => {
// const database = getFirestore();
// const refCollection = collection(database, "items");

// getDocs(refCollection).then((snapshot) => {
//   console.log(
//     snapshot.docs.map((doc) => {
//     return {id: doc.id, ...doc.data()}
//   })
// )
// })
// }, []);

// para traer a un documento por categoria
// useEffect(() => {
//   const database = getFirestore();
//   const q = query(
//     collection(database, "items"),
//     where("categoryId", "==", "Urbanas")  
//   );
  
//   getDocs(refCollection).then((snapshot) => {
//   if (snapshot.size === 0) console.log("No hay resultados");
//   else
//   snapshot.docs.map((doc) => {
//     return {id: doc.id, ...doc.data()}
//   })
// })
// }, []);

//para traer a un documento por id
// useEffect(() => {
//   const database = getFirestore();
//   const refDocument = doc(database, "items", "fcO0nhqavq5Znc0swSTG");
  
//   getDoc(refDocument).then((snapshot) => {
//       return {id: snapshot.id, ...snapshot.data()};
//   });
// }, []);


  return (
    <>
    <Provider>  
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/react-proyect" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
    
    )
}

export default App

