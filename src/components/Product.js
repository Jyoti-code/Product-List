import React from 'react';

function Product({ product }) {
  const imageHeight = '250px';

  return (
    <>
      <div className="card mb-3" style={{ border:'none'}}>
      <img
            src={product.image}
            alt={product.title}
            style={{ height: imageHeight }}
          />
          
          <button className="quick-buy-button">Quick Buy</button>
        
        <div className="card-footer mt-3" style={{border:'none'}}>
          <p className="price-description">{product.description}</p>
          <div className='d-flex flex-direction justify-content-between'>
            <p className="price-description">${product.price}</p>
            <i className="fa fa-heart-o" style={{ color: 'grey', fontSize: '20px' }}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
