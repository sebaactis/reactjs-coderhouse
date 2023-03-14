import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {

  const { cart, deleteCart, deleteProd, totalCart, addToCart, totalCantCart, deleteOneProd } = useContext(CartContext);


  if (totalCart === 0) {
    return (
      <div className="cartContainer">
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
      <div className="finalCartCont">
        {

          cart.map((prod) => {

            return (
              <div key={prod.id} className="cartProd" style={{}}>
                <img src={prod.img} className="imgCart" alt="imagen producto" />
                <h5 className="cartProdName">{prod.name}</h5>
                <p className="cartProdPrice"> Precio: <span className="onlyPriceCart">${prod.price}</span></p>
                <p className="cartProdCant"> Cantidad: {prod.cantidad}</p>
                <p className="cartProdSubTotal"> Subtotal:<span className="onlyPriceCart"> ${prod.price * prod.cantidad} </span></p>
                <button className="btn btn-secondary btnAddCart" onClick={() => addToCart(prod, 1)}>+</button>
                <button className="btn btn-secondary btnDeleteCart" onClick={() => deleteOneProd(prod)}>-</button>
                <button className="btn btn-danger" onClick={() => deleteProd(prod.id)}>X</button>
              </div>
            )

          })
        }
        <div className="controlsCart">


          <p className="totalProdCart" > Total de Productos: {totalCantCart} </p>
          <p className="totalPriceCart" > Total: <span className="onlyPriceCart">$ {totalCart} </span> </p>
          <Link to="/checkout"><button className="btn btn-secondary endShopCart"> Finalizar Compra </button></Link>
          <button className="btn btn-secondary emptyCart" onClick={deleteCart}> Vaciar carrito </button>

        </div>


      </div>
    )

  }

}

export default Cart;