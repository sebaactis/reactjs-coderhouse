import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Fondo from "../visual/Fondo";
import { getDocs, query, where } from "firebase/firestore";
import { collectionProd } from "../../services/firebaseconfig";




const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryName } = useParams();

  useEffect(() => {

    const ref = categoryName ? query(collectionProd, where("category", "==", categoryName)) : collectionProd

    getDocs(ref)
      .then((res) => {
        const products = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data()
          }
        })
        setItems(products)
      })

      .catch((error) => {
        console.log(error)
      })

      .finally(() => {
        setLoading(false);
      })

    /* const getProducts = () => {

      return new Promise((res, rej) => {
        const productosFiltrados = products.filter((prod) => prod.category === categoryName)

        const ref = categoryName ? productosFiltrados : products;

        setTimeout(() => {
          res(ref);
        }, 2000)

      });

    };

    getProducts()
      .then((res) => {
        setItems(res);
      })
      .catch((rej) => {
        console.log(rej);
      })
      .finally(() => {
        setLoading(false);
      }) */

    return () => setLoading(true);

  }, [categoryName]);


  if (loading) {
    return (
      <div>
        <Fondo />
        <Skeleton width={"100%"} height={450} highlightColor={"yellow"} />

      </div>
    )
  }

  return (

    <div className="contenedorListContainer">

      <Fondo />
      <ItemList items={items} />


    </div>
  );

}


export default ItemListContainer