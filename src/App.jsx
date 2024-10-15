import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './App.css'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo={"Bienvenidos a la tienda no oficial de Razer"} />
    </div>
  )
}

export default App