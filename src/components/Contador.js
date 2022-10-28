import { useState } from "react"

const Contador = ({ stock }) => {
    
    const [cantidad, setCantidad] = useState(1);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        } else {
        }

    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const reset = () => {
        setCantidad(0);
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
            <p style={{ color: "white", fontSize: "2rem" }}> {cantidad} </p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "2rem" }}>

                <button className="btn btn-warning" style={{ margin: "3px" }} onClick={sumar}> Sumar</button>
                <button className="btn btn-warning" style={{ margin: "3px" }} onClick={restar}> Restar</button>
                <button className="btn btn-warning" style={{ margin: "3px" }} onClick={reset}> Reset</button>

            </div>

        </div>
    )
};


export default Contador