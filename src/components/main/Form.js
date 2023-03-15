import { addDoc, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { orderCollection } from "../../services/firebaseconfig";

const Form = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, totalCart, deleteCart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmed, setEmailConfirmed] = useState("");
  const [phone, setPhone] = useState("");
  const [direc, setDirec] = useState("");

  const enviarDatos = (e) => {
    e.preventDefault();

    const objOrden = {
      buyer: {
        nombre: name,
        apellido: lastName,
        telefono: phone,
        direccion: direc,
        email,
      },

      items: cart,
      total: totalCart,
      date: serverTimestamp(),
    };

    addDoc(orderCollection, objOrden)
      .then((res) => {
        setOrderId(res.id);
        deleteCart();
      })
      .catch((error) => {
        console.log(`Ocurrio un ${error}`);
      });
  };

  const handleName = (e) => setName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleEmailConfirmed = (e) => setEmailConfirmed(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleDir = (e) => setDirec(e.target.value);

  if (orderId) {
    return (
      <div className="orderConteiner">
        <h1 className="tituloOrden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-check-circle checkConf"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
          ¡Tu compra se ha realizado con éxito!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-check-circle checkConf"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
        </h1>
        <h4 className="seguimientoOrden">
          {" "}
          Su numero de orden y seguimiento es:{" "}
          <span style={{ fontWeight: "bold", color: "green" }}>{orderId}</span>
        </h4>
        <h6 className="plazoOrder">
          {" "}
          Recibira su compra en un plazo de hasta 10 dias habiles.
        </h6>
      </div>
    );
  }

  return (
    <div className="checkoutCont">
      <section className="formConteiner">
        <form className="form" action="" onSubmit={enviarDatos}>
          <input
            style={{ marginBottom: "0.3rem", padding: "0.2rem 2rem" }}
            type="text"
            placeholder="Nombre"
            name="nombre"
            onChange={handleName}
            value={name}
          />
          <input
            style={{ marginBottom: "0.3rem", padding: "0.2rem 2rem" }}
            type="text"
            placeholder="Apellido"
            name="apellido"
            onChange={handleLastName}
            value={lastName}
          />
          <input
            style={{ marginBottom: "0.3rem", padding: "0.2rem 2rem" }}
            type="number"
            placeholder="Telefono"
            name="telefono"
            onChange={handlePhone}
            value={phone}
          />
          <input
            style={{ marginBottom: "0.3rem", padding: "0.2rem 2rem" }}
            type="text"
            placeholder="Direccion"
            name="direccion"
            onChange={handleDir}
            value={direc}
          />
          <input
            style={{ marginBottom: "0.3rem", padding: "0.2rem 2rem" }}
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleEmail}
            value={email}
          />
          <input
            style={{ marginBottom: "0.3rem", padding: "0.2rem 2rem" }}
            type="email"
            placeholder="Confirme su Email"
            name="email"
            onChange={handleEmailConfirmed}
            value={emailConfirmed}
          />
          <button
            className="btn btn-success"
            style={{ marginBottom: "0.6rem", padding: "0.2rem" }}
            disabled={
              name === "" ||
              lastName === "" ||
              email === "" ||
              direc === "" ||
              emailConfirmed === "" ||
              phone === "" ||
              email !== emailConfirmed
            }
          >
            {" "}
            Enviar{" "}
          </button>
        </form>
      </section>

      <section>
        <h3>Resumen de su compra</h3>

        {cart.map((prod) => {
          return (
            <div
              key={prod.id}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "0.5rem 0",
              }}
            >
              <p style={{ fontWeight: "bold" }}>{prod.name}</p>
              <p> Precio: ${prod.price}</p>
              <p> Cantidad: {prod.cantidad}</p>
            </div>
          );
        })}

        <h5 style={{ fontWeight: "bold" }}>
          El total de su compra es: ${totalCart}
        </h5>
      </section>
    </div>
  );
};

export default Form;
