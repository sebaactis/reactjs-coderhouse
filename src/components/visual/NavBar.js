import CartWidget from "../CartWidget";
import logo from "../../img/logo.png";
import { Link, NavLink } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const NavBar = ({ isInHeader }) => {

    const { totalCantCart, cart } = useContext(CartContext)

    if (isInHeader) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-warning container-fluid">
                <div className="container-fluid contenedorNav">
                    <Link to="/"><img className="logo" src={logo} alt="logo-pagina" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navBar" id="navbarNav">
                        <ul className="navbar-nav listaNav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category/carne">Hamburguesas de Carne</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category/pollo">Hamburguesas de Pollo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category/vegetariana">Hamburguesas Vegetarianas</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/orderFollow">Estado de pedido</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Volver al inicio</Link>
                            </li>

                        </ul>
                    </div>
                </div>
                {
                    cart.length === 0 ?
                        <Link className="linkCart" style={{ display: "flex", alignItems: "center" }} to="/cart">  <CartWidget /> </Link>
                        :
                        <Link className="linkCart" style={{ display: "flex", alignItems: "center" }} to="/cart">  <CartWidget /> <span style={{ marginLeft: "0.5rem", marginRight: "0.4rem", fontWeight: "bold", fontSize: "1.3rem" }}> {totalCantCart} </span> </Link>
                }

            </nav>

        )
    } else {

        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-warning container-fluid">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navBar" id="navbarNav">
                        <ul className="navbar-nav listaNav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Volver al inicio</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        )

    }



};

export default NavBar;