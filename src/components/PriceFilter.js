// PriceFilter.js
import React from 'react';

function PriceFilter({ onPriceRangeChange }) {
  const handlePriceRangeChange = (minPrice, maxPrice) => {
    onPriceRangeChange(minPrice, maxPrice);
  };

  return (
<div className="PriceFilter">
{/* <label htmlFor="">Sort Product by</label> */}
  <select
    className="form-select"
    onChange={(e) => handlePriceRangeChange(e.target.value, null)}
    style={{color:'#787878',boxShadow:'none',borderColor:'grey'}}
  >
    <option value="All">Sort by Price</option>
    {/* <option value="All">All</option> */}
    <option value="10-20">$10 - $20</option>
    <option value="21-30">$21 - $30</option>
    <option value="31-40">$31 - $40</option>
    <option value="41-50">$41 - $50</option>
  </select>
</div>

  );
}

export default PriceFilter;
