import React from 'react';
import fs from 'fs';
import path from 'path';
import TopBar from '../../topBar.js';
import './preorder.css';

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);

  return products.map(product => ({
    shortName: product.shortName,
    smallLogo: `/preorder/${product.shortName}/smallLogo.svg`,
    candelaMissUniverse: `/preorder/${product.shortName}/candelaMissUniverse.mp4`
  }));
}

export default function Preorder({ params }) {

  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);
  const product = products.find(product => product.shortName === params.shortName);
  for (let i = 0; i < product.images.length; i++) {
    product.images[i] = `../../${product.images[i]}`;
  }
  return (
    <div>
      <TopBar/>
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
          <p>colors</p>
          <p>sizes</p>
          <p className="desc">{product.desc}</p>
          <p className="button">Add to Cart</p>
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