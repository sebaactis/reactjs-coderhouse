import { useContext } from "react"
import { CartContext } from "../../context/CartContext";

const Cart = () => {

  const { cart, deleteCart, deleteProd, totalCart, addToCart } = useContext(CartContext);

  return (

    <div>

      {
        cart.map((prod) => {

          return (
            <div key={prod.id} style={{ display: "flex", alignItems: "center" }}>

              <h5 style={{ margin: "0 2rem" }}>{prod.name}</h5>
              <img src={prod.img} style={{ width: "12rem" }} className="card-img-top" alt="imagen producto" />
              <p style={{ margin: "0 4rem" }}> ${prod.price}</p>
              <p style={{ margin: "0 4rem" }}>Cantidad: {prod.cantidad}</p>
              <p style={{ margin: "0 4rem", fontWeight: "bold" }}> Subtotal: ${prod.price * prod.cantidad}</p>
              <button style={{ margin: "0 4rem" }} className="btn btn-secondary" onClick={() => addToCart(prod, 1)}>+</button>
              <button style={{ margin: "0 4rem" }} className="btn btn-secondary">-</button>
              <button style={{ margin: "0 4rem" }} className="btn btn-danger" onClick={() => deleteProd(prod.id)}>X</button>

            </div>

          )


        })
      }
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "3rem 0" }}>

        <button className="btn btn-warning" onClick={deleteCart}> Vaciar carrito </button>
        <p style={{ margin: "0 3rem", fontWeight: "bold" }}> Total:  ${totalCart} </p>

      </div>


    </div>
  )
}

export default Cart;