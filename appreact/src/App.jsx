import './App.css';
import Navbar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer props={'Bienvenido'} />
    </>
    
    )
}



export default App

