import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Apple', category: 'Fruit', price: 1 },
  { id: 2, name: 'Banana', category: 'Fruit', price: 0.5 },
  { id: 3, name: 'Carrot', category: 'Vegetable', price: 0.75 },
  { id: 4, name: 'Broccoli', category: 'Vegetable', price: 1.25 },
  { id: 5, name: 'Chicken', category: 'Meat', price: 5 },
];

const ProductFilterApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = maxPrice === '' || product.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div>
      <h1>Product Filter App</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All Categories</option>
        <option value="Fruit">Fruit</option>
        <option value="Vegetable">Vegetable</option>
        <option value="Meat">Meat</option>
      </select>
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={handlePriceChange}
      />
      <h2>Product List</h2>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} ({product.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilterApp;
