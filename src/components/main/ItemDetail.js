import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Counter from "./Counter";

const ItemDetail = ({ item }) => {
  const [cant, setCant] = useState(0);

  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addToCart(item, cantidad);
    setCant(cantidad);
  };

  return (
    <div className="itemDetailContainer container-fluid">
      <img
        src={item.img}
        style={{
          width: "29rem",
          marginTop: "1.5rem",
          marginBottom: "0.5rem",
          borderRadius: "15px",
        }}
        alt="..."
      />
      <article className="itemDetail">
        <h3 className="tituloDetalleItem">{item.name}</h3>
        <h4 className="precioDetalleItem">${item.price}</h4>
        <p className="descDetalleItem">{item.description}</p>

        {cant === 0 ? (
          <Counter stock={item.stock} onAdd={onAdd} />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Counter stock={item.stock} onAdd={onAdd} />
            <Link to="/cart" className="btn btn-light onAddButton">
              {" "}
              Finalizar Compra
            </Link>
          </div>
        )}
      </article>
    </div>
  );
};

export default ItemDetail;
