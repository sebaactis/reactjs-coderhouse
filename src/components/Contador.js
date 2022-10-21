import { useState } from "react"

const Contador = ({ stock }) => {

    const [cantidad, setCantidad] = useState(0);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        } else {
        }

    };

    const restar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };

    const reset = () => {
        setCantidad(0);
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "2rem" }}>
            <p style={{ color: "white", fontSize: "2rem" }}> {cantidad} </p>
            <button className="btn btn-warning" style={{ margin: "3px" }} onClick={sumar}> Sumar</button>
            <button className="btn btn-warning" style={{ margin: "3px" }} onClick={restar}> Restar</button>
            <button className="btn btn-warning" style={{ margin: "3px" }} onClick={reset}> Reset</button>

        </div>
    )
};


export default Contador