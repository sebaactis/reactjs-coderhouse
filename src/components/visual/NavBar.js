import CartWidget from "../CartWidget";
import logo from "../../img/logo.png";
import {Link, NavLink} from "react-router-dom"

const NavBar = ({ isInHeader }) => {

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
                    </ul>
                </div>
            </div>
            <Link className="linkCart" to="/cart"> <CartWidget /> </Link>
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
                            <li><p> Redes</p></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )

    }



};

export default NavBar;