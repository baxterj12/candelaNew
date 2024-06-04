'use client'
import react, {useState, useEffect, useRef} from 'react';
import './page.css';
import TopBar from './topBar.js';
import ItemLayout from './itemLayout.js';
import BottomBar from './bottomBar.js';
import { FaCircle } from "react-icons/fa6";
import { GoUnmute, GoMute } from "react-icons/go";
import { IoContrastSharp } from 'react-icons/io5';
import { CartProvider } from './cart.js';

//default indicates that this is the home page
//use classname to create different components

export default function Home() {
  const [muted, muteVideo] = useState(true);
  const videoRef = useRef(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('data/products.json');
      {/*if (!res.ok) {
        throw new Error('Failed to fetch products');
      }*/}
      const data = await res.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      muteVideo(video.muted);
    }
  };
  return (
    <CartProvider>
    <div >
      <title>Candela</title>
      <TopBar paramHelp=""/>
      <div className="videoPage">
        <video ref= {videoRef} src="candelaMissUniverse.mp4" type="video/mp4" autoPlay muted loop playsInline preload="auto" class="w-full"/>
        <img src="smallLogo.png" className="overlayLogo"/>
        <button onClick={toggleMute} className="muteButton"> {muted ? <GoMute style={{width: '5vw',height: '5vw'}}/> : <GoUnmute style={{width: '5vw',height: '5vw'}}/>} </button>
      </div>

      <div className="storyText">
          <h1 className="storyHeader">Who Are We?</h1>
            <p className="storyParagraphs"> Candela is an homage to Salvadoran culture and art. Established in 2023, 
            Candela collaborates with traditional Salvadoran artists to design and create authentic, handmade, 
            ready-to-wear pieces that celebrate the unique cultural identity El Salvador while simultaneously preserving 
            its artistic heritage and practices. 
            </p>
            <p className="storyParagraphs">
              Our mission is to support the stewards of our cultural heritage by facilitating the continuation
              and appreciation of their traditional artisanal skills that have passed down for generations. 
              Our network of artisans, spanning six unique Salvadoran towns, are not just craftsmen — they 
              are dream weavers, synthesizing centuries-old traditions with the contemporary fashion narrative. 
            </p>
            <p className="storyParagraphs">
              Candela stands as a testament to our roots, uniting tradition and innovation to bring 
              forward collections that pay tribute to Salvadoran artistry by positioning its artisans 
              on the global stage. Our approach, centered on building responsible partnerships, 
              increasing community engagement, and celebrating cultural legacy, sets a new standard 
              for how fashion brands can contribute to environmental, social, and cultural sustainability.
            </p>
          <h1 className="slogan">Pieces with soul.<br />Handmade in El Salvador.</h1>
      </div>
      <div className="preorders">
      <h1 className="storyHeader">Pre-Order Now</h1>
        {products.map((product, index) => (
          <div key={index}>
            <p className="preorderNames">{product.name}</p>
            <ItemLayout
              images={product.images}
              name={product.name}
              desc={product.desc}
              price={product.price}
              shortName={product.shortName}
            />
          </div>
        ))}
      </div>
    </div>
    </CartProvider>
  );
}