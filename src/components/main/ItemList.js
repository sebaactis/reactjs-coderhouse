import React from 'react'
import Item from './Item';

const ItemList = ({ items }) => {

    return (
        <>
            <div className="row">
        <section className="contenedorItems col-8">
                    {items.map((producto) => <Item key={producto.id} producto={producto} />)}
                </section>

                <aside className="col-4" style={{display: "flex", alignItems: "center"}}>
                    <h1 style={{color: "white"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta reiciendis nobis repudiandae natus. Itaque porro impedit animi numquam assumenda laborum dignissimos, mollitia atque incidunt et? Asperiores eaque dolor ea doloribus!</h1>
                </aside>
        </div>
        </>
    )
}
export default ItemList