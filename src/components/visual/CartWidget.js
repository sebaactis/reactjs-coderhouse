import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {



    const { totalCantCart } = useContext(CartContext)

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>

            {
                totalCantCart === 0
                    ?
                    <span className="material-symbols-outlined" style={{ fontSize: '2.5rem' }}>
                        shopping_cart_checkout</span>
                    :

                    <>
                        <span className="material-symbols-outlined" style={{ fontSize: '2.5rem' }}> shopping_cart_checkout</span>
                        <span style={{ marginLeft: "0.5rem", marginRight: "0.4rem", fontWeight: "bold", fontSize: "1.3rem" }}> {totalCantCart} </span>
                    </>

            }



        </div>
    )
}

export default CartWidget