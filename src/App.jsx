import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer saludo="Bienvenidos a la tienda no oficial de razer" /> } />
          <Route path='/category/:idCategory' element={ <ItemListContainer saludo="Category" /> } />
          <Route path='/detail/:idProduct' element={ <ItemDetailContainer />} />
          
          <Route path='*' element={ <div>Error 404</div> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App