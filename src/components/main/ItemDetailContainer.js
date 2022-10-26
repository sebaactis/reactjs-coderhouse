import React, { useEffect, useState } from 'react'
import { products } from '../../mock/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const productoFiltrado = products.find( (producto) => producto.id === 3 )

    useEffect( () => {
        const getProduct = () => {
            return new Promise((res, rej) => {
                setTimeout( () => {
                    res(productoFiltrado);
                }, 2000)
            })
        }


        getProduct()
            .then((res) => {
                setItem(res);
            })
            .catch((rej) => {
                console.log(rej);
            })
    }, [])

  return (
    <div> <ItemDetail item={item} /></div>
  )
}

export default ItemDetailContainer