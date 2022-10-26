import Contador from "../Contador"

const ItemDetail = ({ item }) => {

    return (
        <div className="itemDetailContainer" >
            <img src={item.img} style={{ width: '25rem' }} alt="..." />
            <article>
                <h3 className="textoItemDetail">{item.name}</h3>
                <h4 className="textoItemDetail">${item.price}</h4>
                <p className="textoItemDetail">{item.description}</p>
                <Contador stock={3}/>
            </article>

        </div>


    )
}

export default ItemDetail