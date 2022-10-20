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
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <p> {cantidad} </p>
            <button style={{margin: "3px"}} onClick={sumar}> Sumar</button>
            <button style={{margin: "3px"}} onClick={restar}> Restar</button>
            <button style={{margin: "3px"}} onClick={reset}> Reset</button>

        </div>
    )
};


export default Contador