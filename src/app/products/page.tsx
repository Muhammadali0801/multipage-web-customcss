import React from "react";
import { products } from "@/app/data/products";

const ProductsPage = () => {
  return (
    <div className="products-container">
      <h1>Our Products</h1>

      {/* Men's Section */}
      <div className="products-section">
        <h2>Men&apos;s Shoes</h2>
        <div className="products-grid">
          {products.mens.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image} // Use the image path directly
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: {product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Women's Section */}
      <div className="products-section">
        <h2>Women&apos;s Shoes</h2>
        <div className="products-grid">
          {products.womens.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image} // Use the image path directly
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: {product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
