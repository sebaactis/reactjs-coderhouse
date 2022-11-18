import { createContext, useState } from "react";

export const CartContext = createContext();


const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {


        if (isInCart(item.id)) {
            setCart(cart.map(prod => {
                return prod.id === item.id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod
            }))
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }

    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const totalCart = cart.reduce((total, prod) => total + (prod.price * prod.cantidad), 0)

    const totalCantCart = cart.reduce((total, prod) => total + prod.cantidad, 0)

    const deleteProd = (id) => {

        setCart(cart.filter(prod => prod.id !== id))

    }

    const deleteOneProd = (item) => {
        if (item.cantidad > 1) {
            setCart(cart.map(prod => {
                return prod.id === item.id ? { ...prod, cantidad: prod.cantidad - 1 } : prod
            }))
        } else {
            setCart(cart.filter(prod => prod.id !== item.id))
        }

    }

    const deleteCart = () => {
        setCart([]);
    }


    return (

        <CartContext.Provider value={{ cart, addToCart, deleteCart, deleteProd, totalCart, totalCantCart, deleteOneProd }}>
            {children}
        </CartContext.Provider>

    )

}

export default CartProvider;













