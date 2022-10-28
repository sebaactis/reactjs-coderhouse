import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={producto.img} className="card-img-top" alt="imagen producto" />
            <div className="card-body">
                <p className="card-text">{producto.name}</p>
                <p className="card-text">$  {producto.price}</p>
                <Link to={`/detail/${producto.id}`} className="btn btn-warning">Ver Detalle</Link>
            </div>
        </div >
    )
}

export default Item