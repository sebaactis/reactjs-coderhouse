import CartWidget from "../CartWidget";
import logo from "../../img/logo.png";

const NavBar = ({ isInHeader }) => {

    if (isInHeader) {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning container-fluid">
            <div className="container-fluid contenedorNav">
                <img className="logo" src={logo} alt="logo-pagina" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navBar" id="navbarNav">
                    <ul className="navbar-nav listaNav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="https://www.google.com.ar">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.google.com.ar">Locales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.google.com.ar">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget />
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
                            <p className="parrafoNav"> Nuestras Redes</p>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.google.com.ar">Instagram</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.google.com.ar">Facebook</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )

    }



};

export default NavBar;