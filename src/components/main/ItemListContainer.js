import { useEffect, useState } from "react";
import { products } from "../../mock/products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Fondo from "../visual/Fondo";



const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {

    const getProducts = () => {

      return new Promise((res, rej) => {
        const productosFiltrados = products.filter((prod) => prod.category === categoryName)

        const ref = categoryName ? productosFiltrados : products;

        setTimeout(() => {
          res(ref);
        }, 500)

      });

    };

    getProducts()
      .then((res) => {
        setItems(res);
      })
      .catch((rej) => {
        console.log(rej);
      })


  }, [categoryName]);


  return (

    <div className="contenedorListContainer">

      <Fondo />

      <ItemList items={items} />


    </div>
  );

}


export default ItemListContainer