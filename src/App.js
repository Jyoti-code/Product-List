import React, { useState } from 'react';
import productsData from './productsData';
import ProductList from './components/ProductList';
import PriceFilter from './components/PriceFilter';
import Pagination from './components/Pagination';
import Navbar from './components/Navbar';

function App() {
  const [products, setProducts] = useState(productsData);
  const [filters, setFilters] = useState({ category: '', price: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState(''); // Add this state

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (minPrice, maxPrice) => {
    if (minPrice === 'All') {
      setSelectedPriceRange(''); // Show all products
    } else {
      setSelectedPriceRange(`${minPrice}-${maxPrice}`);
    }
  };
  

  return (
    <div className="App container-xl">
      <h1 className='d-flex flex-direction justify-content-center mt-3 header-text'>Product List</h1>
      <div className="d-flex flex-direction justify-content-between mt-3 mb-3">
      <Navbar onCategoryChange={handleCategoryChange} />
      <PriceFilter onPriceRangeChange={handlePriceRangeChange} />
      </div>
      <ProductList
        products={products
          .filter((product) => {
            // Filter by category
            return !selectedCategory || product.category === selectedCategory;
          })
          .filter((product) => {
            // Filter by price range (if a specific range is selected)
            if (!selectedPriceRange) {
              return true; // Show all products
            } else {
              const [minPrice, maxPrice] = selectedPriceRange.split('-');
              return (
                product.price >= parseInt(minPrice, 10) &&
                product.price <= parseInt(maxPrice, 10)
              );
            }
          })
          .sort((a, b) => {
            // Sort by price (if a specific range is selected)
            if (selectedPriceRange) {
              return a.price - b.price;
            }
            return 0;
          })}
        filters={filters}
        currentPage={currentPage}
        productsPerPage={productsPerPage}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
