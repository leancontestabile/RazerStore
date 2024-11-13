import iconCart from "../../assets/cart.webp";
import "./cartwidget.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext)

  const quantity = totalQuantity()

  return (
    <Link to="/cart" className="cart">
        <img src={iconCart} width={50} alt="cart" />
        <p>{ quantity >= 1 ? quantity : "" }</p>
    </Link>
  )
}

export default CartWidget