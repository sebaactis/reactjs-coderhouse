import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {

  const { cart, deleteCart, deleteProd, totalCart, addToCart, totalCantCart, deleteOneProd } = useContext(CartContext);


  if (totalCart === 0) {
    return (
      <div className="cartConteiner">
        <p className="parrafoCartEmpty"> <span className="spanCart">X</span> Su carrito de compras se encuentra vacio <span className="spanCart">X</span></p>
        <p className="parrafoCartEmpty"> Regrese a la pagina principal para agregar productos </p>
        <Link className="link" to="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 iconCart">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
        </svg>
        </Link>
      </div>
    )

  } else {

    return (

      <div>

        {

          cart.map((prod) => {

            return (
              <div key={prod.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", margin: "0.5rem 0"}}>

                <img src={prod.img} className="imgCart" alt="imagen producto" />
                <h5>{prod.name}</h5>
                <p> Precio: ${prod.price}</p>
                <p> Cantidad: {prod.cantidad}</p>
                <p style={{fontWeight: "bold" }}> Subtotal: ${prod.price * prod.cantidad}</p>
                <button  className="btn btn-secondary" onClick={() => addToCart(prod, 1)}>+</button>
                <button  className="btn btn-secondary" onClick={() => deleteOneProd(prod)}>-</button>
                <button  className="btn btn-danger" onClick={() => deleteProd(prod.id)}>X</button>

              </div>

            )

          })
        }
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "3rem 0" }}>

          <button className="btn btn-warning" onClick={deleteCart}> Vaciar carrito </button>
          <p style={{ margin: "0 3rem", fontWeight: "bold" }}> Total de Productos: {totalCantCart} </p>
          <p style={{ margin: "0 3rem", fontWeight: "bold" }}> Total: ${totalCart} </p>
          <Link to="/checkout"><button className="btn btn-warning"> Finalizar Compra </button></Link>

        </div>


      </div>
    )

  }

}

export default Cart;