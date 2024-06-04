import React from 'react';
import fs from 'fs';
import path from 'path';
import TopBar from '../../topBar.js';
import './preorder.css';
import Circles from './circles.js'
import SizeDrop from './sizeDrop.js'

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);

  return products.map(product => ({
    shortName: product.shortName,
    smallLogo: `/preorder/[shortName]/smallLogo.svg`,
    candelaMissUniverse: `/candelaMissUniverse.mp4`,
    candelaLogo: `/candelaLogo.png`
  }));
}

export default function Preorder({ params }) {

  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);
  const product = products.find(product => product.shortName === params.shortName);
  for (let i = 0; i < product.images.length; i++) {
    product.images[i] = `../${product.images[i]}`;
  }
  return (
    <div>
      <title>Candela | Preorder</title>
      <TopBar paramHelp="../"/>
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
          <Circles colors={product.colors}/>
          <SizeDrop sizes={product.sizes}/>
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