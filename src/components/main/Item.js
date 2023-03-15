import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="card">
      <img
        src={producto.img}
        style={{ borderRadius: "50px", height: "15rem" }}
        className="card-img-top"
        alt="imagen producto"
      />
      <div className="card-body">
        <p className="card-text">{producto.name}</p>
        <p className="card-text">${producto.price}</p>
        <Link
          style={{ fontWeight: "bold" }}
          to={`/detail/${producto.id}`}
          className="buttonProd"
        >
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
