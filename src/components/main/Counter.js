import { useState } from "react";

const Counter = ({ stock, onAdd }) => {
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
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          className="btn btn-warning buttonContadorMenos"
          onClick={restar}
        >
          {" "}
          -
        </button>
        <p
          style={{
            color: "white",
            fontSize: "1.5rem",
            margin: "1rem",
            fontWeight: "bold",
          }}
        >
          {" "}
          {cantidad}{" "}
        </p>
        <button className="btn btn-warning buttonContadorMas" onClick={sumar}>
          {" "}
          +
        </button>
        <button className="btn btn-warning buttonContadorReset" onClick={reset}>
          {" "}
          Reset
        </button>
      </div>
      <div className="onAddContenedor">
        <button
          className="btn btn-light onAddButton"
          onClick={() => onAdd(cantidad)}
        >
          {" "}
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default Counter;
