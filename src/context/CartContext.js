import { createContext, useState } from "react";

export const CartContext = createContext();


const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    // Funcion que agrega los productos al carrito
    const addToCart = (item, cantidad) => {


        if (isInCart(item.id)) {
            setCart(cart.map(prod => {
                return prod.id === item.id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod
            }))
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }

    };

    // Funcion para verificar si ya existe un producto en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    // Funcion para sumar el total de carrito
    const totalCart = cart.reduce((total, prod) => total + (prod.price * prod.cantidad), 0)

    // Funciones para total de cantidades

    const totalCantCart = cart.reduce((total, prod) => total + prod.cantidad, 0)

    // Funcion para eliminar un producto por completo

    const deleteProd = (id) => {

        setCart(cart.filter(prod => prod.id !== id))

    }

    // Funcion para eliminar cantidades de un producto en el carrito

    const deleteOneProd = (item) => {
        if (item.cantidad > 1) {
            setCart(cart.map(prod => {
                return prod.id === item.id ? { ...prod, cantidad: prod.cantidad - 1 } : prod
            }))
        } else {
            setCart(cart.filter(prod => prod.id !== item.id))
        }

    }

    // Funcion para vaciar el carrito
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













