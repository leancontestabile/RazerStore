import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo={"Bienvenidos a la tienda no oficial de Razer"} />
      <ItemDetailContainer />
    </div>
  )
}

export default App