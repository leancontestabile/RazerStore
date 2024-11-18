import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer theme="dark" />
          <Routes>
            <Route path='/' element={<ItemListContainer saludo="Bienvenidos a la tienda no oficial de razer" />} />
            <Route path='/category/:idCategory' element={<ItemListContainer saludo="Category" />} />
            <Route path='/detail/:idProduct' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='*' element={<div>Error 404</div>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App