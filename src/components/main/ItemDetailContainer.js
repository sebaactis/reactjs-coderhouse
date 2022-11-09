import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../../mock/products';
import ItemDetail from './ItemDetail';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const [loading, setLoading] = useState(true);

    const { idProd } = useParams();

    useEffect(() => {
        const getProduct = () => {
            const productoFiltrado = products.find((producto) => producto.id === Number(idProd))

            return new Promise((res, rej) => {

                setTimeout(() => {
                    res(productoFiltrado)
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
            .finally(() => {
                setLoading(false);
            })

        return () => setLoading(true);

    }, [])

    if (loading) {
        return (
            <div>
                <Skeleton width={"100%"} height={400} margin={30} highlightColor={"yellow"} />
            </div>
        )
    }

    return (
        <div className="detalleItem"> <ItemDetail item={item} /></div>
    )
}

export default ItemDetailContainer