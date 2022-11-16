import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { orderCollection } from '../../services/firebaseconfig';

export const Order = () => {

    const [order, setOrder] = useState("");

    const handleOrder = (e) => setOrder(e.target.value);

    const pedirDatos = (e) => {
        e.preventDefault();
        console.log(order);

    }

    return (
        <form className="parrafoEstadoPedido" onSubmit={pedirDatos}>
            <h2>Ingrese su numero de segumiento</h2>
            <input style={{ marginLeft: "3rem", padding: "0.2rem 1rem" }} type="text" name="order" onChange={handleOrder} value={order} />
            <button > Enviar </button>

        </form>
    )
}
