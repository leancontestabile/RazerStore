import logo from "../../assets/logo.png"
import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {

    return(
        <nav className="navbar">
            <div className="brand">
                <img src={logo} width={150} alt="" />
            </div>

            <div className="options">
                <a>Mouse</a>
                <a>Teclados</a>
            </div>

            <CartWidget />
        </nav>
    )
}

export default NavBar