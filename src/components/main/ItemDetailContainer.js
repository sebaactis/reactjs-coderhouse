import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { collectionProd } from '../../services/firebaseconfig';
import { doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const [loading, setLoading] = useState(true);

    const { idProd } = useParams();

    useEffect(() => {

        const ref = doc(collectionProd, idProd);

        getDoc(ref)
            .then((res) => {
                setItem({
                    id: res.id,
                    ...res.data()
                })
            })
            .catch(() => {
            })
            .finally(() => {
                setLoading(false);
            })

        return () => setLoading(true);

    }, [idProd])

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