import React from 'react';
import Product from './Product';


function ProductList({ products, filters, currentPage, productsPerPage }) {
  const filteredAndSortedProducts = products
    .filter((product) => {
      return (
        (!filters.category || product.category === filters.category) &&
        (!filters.price || product.price <= parseFloat(filters.price))
      );
    })
    .sort((a, b) => {
      return a.price - b.price;
    });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="ProductList">
       <div className="product-grid">
        {currentProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
