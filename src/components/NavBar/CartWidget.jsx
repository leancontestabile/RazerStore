import iconCart from "../../assets/cart.webp";
import "./cartwidget.css"

const CartWidget = () => {
  return (
    <div className="cart">
        <img src={iconCart} width={50} alt="cart" />
        <p>1</p>
    </div>
  )
}

export default CartWidget