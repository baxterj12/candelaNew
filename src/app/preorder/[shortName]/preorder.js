'use client'
import React, { useState } from 'react';
import './preorder.css';
import Circles from './circles.js'
import SizeDrop from './sizeDrop.js'

export default function Preorder({ product }) {
  const [clickedIndex, setClickedIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

    return (
      <div>
        <div className="preorderContainer">
          <div className="images">
            <img src={product.images[1]} className="image1" />
            <div className='imageCol'>
              <img src={product.images[4]} className="imageInCol"/>
              <img src={product.images[0]} className="imageInCol"/>
            </div>
          </div>
          <div className="text">
            <h1 className="name">{product.name}</h1>
            <p className="price">${product.price.toFixed(2)}</p>
            <Circles colors={product.colors} clickedIndex={clickedIndex} setClickedIndex={setClickedIndex}/>
            <SizeDrop sizes={product.sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
            <p className="desc">{product.desc}</p>
            <button type="submit" className="button">Add to Cart</button>
            <p className="disclaimer">Because our items are 100% handmade by artisans in 
            El Salvador, our pre-order process takes between 4-6 weeks. Once you have 
            placed your pre-order, we will updating you on the production process. This 
            will allow you take a closer look at how we make our items while getting 
            to know our brand better! </p>
          </div>
        </div>
      </div>
    );
  }