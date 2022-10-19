import { useState } from "react"

const Contador = ({ stock }) => {

    const [cantidad, setCantidad] = useState(0);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }

    };

    const restar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }

    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <p> {cantidad} </p>
            <button onClick={sumar}> Sumar</button>
            <button onClick={restar}> Restar</button>

        </div>
    )
};


export default Contador