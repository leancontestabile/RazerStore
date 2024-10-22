import logo from "../../assets/logo.png"
import CartWidget from "./CartWidget"
import "./navbar.css"
import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <nav className="navbar">
            <Link to="/" className="brand">
                <img src={logo} width={150} alt="" />
            </Link>

            <div className="options">
                <a>
                    <Link to="/category/mouse">Mouse</Link>
                </a>
                <a>
                    <Link to="/category/keyboard">Teclados</Link>
                </a>
            </div>

            <CartWidget />
        </nav>
    )
}

export default NavBar