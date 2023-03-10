import Link from 'next/link';
import React from 'react';

const Herobanner = () => {
    return (
        <div className="hero-banner-container">
        <div>
          <p className="beats-solo">smalltext</p>
          <h3>midtext</h3>
          <h1>largeText</h1>
          <img src="" alt="headphones" className="hero-banner-image" />
  
          <div>
            <Link href="product/id">
              <button type="button">buttonText</button>
            </Link>
            <div className="desc">
              <h5>Description</h5>
              <p>description</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Herobanner;