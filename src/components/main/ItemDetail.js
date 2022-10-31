import Contador from "../Contador"

const ItemDetail = ({ item }) => {

    return (
        <div className="itemDetailContainer container-fluid" >
            <img src={item.img} style={{ width: '30rem', marginTop: '2rem' }} alt="..." />
            <article>
                <h3 className="tituloDetalleItem">{item.name}</h3>
                <h4 className="precioDetalleItem">${item.price}</h4>
                <p className="descDetalleItem">{item.description}</p>
                <Contador stock={item.stock}/>
            </article>

        </div>


    )
}

export default ItemDetail