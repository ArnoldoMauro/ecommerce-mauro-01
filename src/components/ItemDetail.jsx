import React from 'react';

function ItemDetail({product}) {
    return (
        <div className="d-flex justify-content-center">    
        <div className="card text-center bg-dark" style={{ width: '400px' }}>
            
            <img className = "card-img-top" src={product.image} alt="imagen del producto" />
            <div className="card-body">
                <h4 className='card-title text-light'>{product.title}</h4>
                <small className='text-light'>{product.category}</small>
                <p className='card-text text-secondary'>{product.price}
                </p>
                <ItemCount onAddToCart={handleAddToCart} />
            </div>
            
        </div>
    </div>
    )
}
export default ItemDetail;
