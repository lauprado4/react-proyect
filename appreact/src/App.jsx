import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/NavBar';
import {ItemListContainer} from './componentes/ItemListContainer';
import {ItemDetailContainer} from './componentes/ItemDetailContainer';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/react-proyect" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
    </>
    
    )
}

export default App

