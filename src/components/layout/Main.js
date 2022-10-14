import logo from '../../img/logo.png';

const Main = () => {

    return (

        <main className="container-fluid mainContenedor">

            <div className="card" style={{width: '18rem'}}>
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Ejemplo Card</p>
                </div>
            </div>

            <div className="card" style={{width: '18rem'}}>
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Ejemplo Card</p>
                </div>
            </div>

            <div className="card" style={{width: '18rem'}}>
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Ejemplo Card</p>
                </div>
            </div>

        </main>
    );
};

export default Main;

