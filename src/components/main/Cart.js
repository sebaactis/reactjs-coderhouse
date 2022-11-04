import { useContext } from "react"
import { CartContext } from "../../context/CartContext";

const Cart = () => {

  const { cart, deleteCart, deleteProd } = useContext(CartContext);

  console.log(cart);
  console.log(deleteProd);


  return (

    <div>

      {
        cart.map((prod) => {

          return (
            <div className="card" style={{display: "flex", justifyContent: "center"}}>

              <h3>{prod.name}</h3>
              <img src={prod.img} style={{width: "15rem"}} className="card-img-top" alt="imagen producto" />
              <h5> ${prod.price}</h5>
              <p>Cantidad: {prod.cantidad}</p>
              <button className="botonEliminar" onClick={deleteProd}>X</button>
            </div>

          )


        })
      }
      <button onClick={deleteCart}> Borrar </button>

    </div>
  )
}

export default Cart;