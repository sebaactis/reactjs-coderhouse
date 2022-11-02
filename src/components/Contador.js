import { useState } from "react"

const Contador = ({ stock, onAdd }) => {

    const [cantidad, setCantidad] = useState(1);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }

    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const reset = () => {
        setCantidad(1);
        
    }

    return (
        <>
            <div style={{ display: "flex", alignItems: "center" }}>
                <button className="btn btn-warning buttonContador" style={{ margin: "1rem", fontWeight: "bold" }} onClick={sumar}> +</button>
                <p style={{ color: "white", fontSize: "1.5rem", marginTop: "1rem", fontWeight: "bold" }}> {cantidad} </p>
                <button className="btn btn-warning buttonContador" style={{ margin: "1rem", fontWeight: "bold" }} onClick={restar}> -</button>
                <button className="btn btn-warning buttonContador" style={{ margin: "1rem", fontWeight: "bold" }} onClick={reset}> Reset</button>

            </div>
            <button className="btn btn-light" onClick={() => onAdd(cantidad)}> Agregar al carrito</button>
        </>
    )
};


export default Contador