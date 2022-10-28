import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../../mock/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const {idProd} = useParams();

    useEffect(() => {
        const getProduct = () => {
            const productoFiltrado = products.find((producto) => producto.id === Number(idProd))

            return new Promise((res, rej) => {
                res(productoFiltrado);
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
        <div className="detalleItem"> <ItemDetail item={item} /></div>
    )
}

export default ItemDetailContainer