import { doc, getDoc } from 'firebase/firestore';
import { useState } from 'react'
import { orderCollection } from '../../services/firebaseconfig';

export const Order = () => {

    const [orderInfo, setOrderInfo] = useState("");

    const [order, setOrder] = useState("");
    const handleOrder = (e) => setOrder(e.target.value);

    const pedirDatos = (e) => {
        e.preventDefault();

        const ref = doc(orderCollection, order);

        getDoc(ref)
            .then((res) => {
                setOrderInfo({ ...res.data() });

            })
            .catch((error) => {
                alert("Ocurrio un error, reintente mas tarde")
            })
    }

    const resetOrder = () => {
        setOrderInfo("");
    }

    if (orderInfo) {

        const { nombre, apellido, direccion, email, telefono } = orderInfo.buyer
        const total = orderInfo.total
        const ordenItems = orderInfo.items


        return (
            <div className="pedidoConteiner">

                <h1>Su pedido <span style={{ color: "green", fontWeight: "bold" }}>{order}</span> es:</h1>
                <div className="datosPersonalesOrden">

                    <h3 style={{ fontWeight: "bold", textDecoration: "underline" }}>Datos personales:</h3>
                    <p> <span style={{ fontWeight: "bold" }}> Nombre: </span> {nombre} </p>
                    <p> <span style={{ fontWeight: "bold" }} > Apellido: </span> {apellido} </p>
                    <p> <span style={{ fontWeight: "bold" }}> Direccion de envio: </span> {direccion} </p>
                    <p> <span style={{ fontWeight: "bold" }}> Correo Electronico: </span> {email} </p>
                    <p> <span style={{ fontWeight: "bold" }}> Telefono de contacto: </span> {telefono} </p>
                </div>
                <h3 style={{ fontWeight: "bold", textDecoration: "underline" }}>Productos: </h3>
                <div> {ordenItems.map((orden) => {
                    return (
                        <div key={orderInfo} className="ItemsOrden">
                            <img src={orden.img} width={200} alt="imagenProd" />
                            <p> <span style={{ fontWeight: "bold" }}> Nombre: </span> {orden.name} </p>
                            <p> <span style={{ fontWeight: "bold" }}> Cantidad: </span> {orden.cantidad} </p>
                            <p> <span style={{ fontWeight: "bold" }}> Precio unitario: </span> $ {orden.price}</p>

                        </div>
                    )
                })}

                </div>

                <p> <span style={{ fontWeight: "bold" }}> Precio total a pagar: </span> ${total}</p>
                <button className="btn btn-success" onClick={resetOrder}>Consultar por otro pedido</button>

            </div>
        )
    }

    return (
        <form className="divEstadoPedido" onSubmit={pedirDatos}>
            <h2>Ingrese su numero de seguimiento</h2>
            <input style={{ padding: "0.2rem 2rem" }} type="text" name="order" onChange={handleOrder} value={order} />
            <button className="buttonFormEstadoPedido btn btn-success" > Enviar </button>

        </form>
    )
}
