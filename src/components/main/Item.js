import React from 'react'

const Item = ({producto}) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={producto.img} className="card-img-top" alt="imagen producto" />
            <div className="card-body">
                <p className="card-text">{producto.name}</p>
                <p className="card-text">$  {producto.price}</p>
                <a href="https://www.google.com.ar" className="btn btn-warning">Ver Detalle</a>
            </div>
        </div >
    )
}

export default Item