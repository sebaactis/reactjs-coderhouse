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
   

    // Funcion para eliminar un producto

    const deleteProd = (id) => {

        setCart(cart.filter(prod => prod.id !== id))

    }


    // Funcion para vaciar el carrito
    const deleteCart = () => {
        setCart([]);
    }

    console.log(cart)

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteCart, deleteProd }}>
            {children}
        </CartContext.Provider>

    )

}

export default CartProvider;













