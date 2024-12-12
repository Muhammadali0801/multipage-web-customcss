'use client';
import React from 'react';

type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Shoe Spot Black',
    price: '₹13,995',
    category: "Men's Shoes",
    image: '/shoes-images/black-office.png',
  },
  {
    id: 2,
    name: 'Shoe Spot Leather',
    price: '₹13,995',
    category: "Men's Shoes",
    image: '/shoes-images/grey-leather.png',
  },
  {
    id: 3,
    name: 'Shoe Spot Clip Design',
    price: '₹16,995',
    category: "Men's Shoes",
    image: '/shoes-images/clip-design.png',
  },
  {
    id: 4,
    name: 'Shoe Spot Coverd',
    price: '₹14,995',
    category: "Men/Women's Shoes",
    image: '/shoes-images/lether-sole.png',
  },
  {
    id: 5,
    name: 'Shoe Spot bottom-Heels',
    price:'₹13,45',
    category: "Women's",
    image:'/shoes-images/bottom-heels.png'
  },
  {
    id: 5,
    name: 'Shoe Spot High-Heels',
    price:'₹17,455',
    category: "Women's",
    image:'/shoes-images/high-heels.png'
  },
];

export default function BestOfTheShoeSpot(): JSX.Element {
  return (
    <div className="best-of-container">
      <h2 className="section-title">Best of The Shoe Spot</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
