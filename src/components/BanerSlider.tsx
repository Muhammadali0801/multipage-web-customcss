'use client';
import React, { useState, useEffect } from 'react';

// banner slider images
const images: string[] = [
  '/banner-images/big-sale.png',
  '/banner-images/Brown-white.png',
  '/banner-images/Red-White.png',
  '/banner-images/shoe-banner.png',
];

export default function BannerSlider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval); 
  }, []);

  const handleNavigation = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-image">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <div className="slider-buttons">
        {images.map((_, index) => (
          <button
            key={index}
            className={`slider-button ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleNavigation(index)}
          />
        ))}
      </div>
    </div>
  );
}
