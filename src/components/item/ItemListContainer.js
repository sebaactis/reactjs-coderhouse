import { useEffect, useState } from "react";
import { products } from "../mock/products";
import ItemList from "./ItemList";



const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {

    const getProducts = () => {

      return new Promise((res, rej) => {
        setTimeout(() => {
          res(products);
        }, 2000)

      });

    };

    getProducts()
      .then((res) => {
        setItems(res);
      })
      .catch((rej) => {
        console.log(rej, "rechazo");
      })


  }, []);


  return (

    <div>
      
    <ItemList items={items}/>
    
    </div>
  );

}






export default ItemListContainer