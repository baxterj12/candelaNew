'use client'
import react, {useState} from 'react';
import './page.css';
import TopBar from './topBar.js';
import { FiAlignJustify } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { FaChevronDown} from "react-icons/fa";


//default indicates that this is the home page
//use classname to create different components
export default function Home() {
  return (
    <div class="w-full" className="container" >
      <TopBar/>
      <div className="videoPage">
        <video src="/candelaMissUniverse.mov" autoPlay loop class="w-full"/>
        <img src="/smallLogo.svg" className="overlayLogo"/>
        <h1 className="overlayText">Pieces with soul.<br />Made in El Salvador.</h1>
      </div>

      <div className="storyText">
          <h1 className="header">CANDELA'S STORY</h1>
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
              Candela actively collaborates with Mater Filus, a women's shelter in El Salvador, and 
              Diseña Tu Meta, a women's empowerment NGO, to provide training and empowerment programs for 
              women from disadvantaged backgrounds. Our commitment extends beyond individual empowerment, 
              as we endeavor to strengthen our community through educational workshops and initiatives 
              designed to sustain cultural heritage and stimulate economic growth through opportunity creation.  
            </p>
            <p className="storyParagraphs">
              Candela stands as a testament to our roots, uniting tradition and innovation to bring 
              forward collections that pay tribute to Salvadoran artistry by positioning its artisans 
              on the global stage. Our approach, centered on building responsible partnerships, 
              increasing community engagement, and celebrating cultural legacy, sets a new standard 
              for how fashion brands can contribute to environmental, social, and cultural sustainability.
            </p>
            <p> </p>
      </div>

      <div className="newestCollection">
        <h1 className="header"> NEW ARRIVALS</h1>
        <NewestCollection/>
      </div>

      <div className="allCollections">
        <h1 className="header"> Our Collections</h1>
        <div className="singleCollection">
          <div className="floracionPancha">
            <img src="/floracionPancha.svg" className="floracionPanchaImage" />
            <h1 className="collectionOverlayPancha">FLORACIÓN PANCHA</h1>
            <p className="textBoxTan">Shop Now</p>
          </div>
          <p className="floracionPanchaText">Every first sunday of may, the residents of panchimalco adorn themselves 
            with flowers and create colorful palm fronds that parade in the procession 
            in honor of the virgin of the rosary and the immaculate conception. To the 
            sounds of marimbas, the dance of the historiantes, and the smells of 
            traditional food, the “festival de las flores y las palmas” is celebrated. 
            this collection is a tribute to our history and the vibrant colors that 
            emanate from the celebration. It is crafted using traditional techniques 
            from El Salvador, such as waist loom weaving and manual sewing techniques.</p>
        </div>
        <div className="singleCollection">
          <p className="laCiebaText">
          A captivating capsule collection inspired by indigenous dance jewelry, 
          meticulously crafted by Salvadoran artisans of Mayan heritage. Rooted in 
          chromotherapy principles, this vibrant collection embraces ancestral wisdom. 
          Each piece features intricate beadwork depicting creatures like spiders, jaguars, 
          panthers, and scorpions, alongside symbols of healing and tradition. Each bracelet 
          reflects the beauty of Mayan culture. Elements such as the mother cell and animals 
          depicted beautifully through the beaded work. Symbolism merges with craftsmanship, 
          with each design bearing profound significance. Unique in their creation, no two 
          bracelets are alike, showcasing the artisan's skill and tradition's spirit. Explore 
          heritage and adornments power in this distinctive collection, where artistry 
          and tradition unite seamlessly. 
          </p>
          <div className="laCieba">
            <img src="/laCieba.svg" className="laCiebaImage" />
            <h1 className="collectionOverlayLaCieba">LA CIEBA</h1>
            <p className="textBoxYellow">Shop Now</p>
          </div>
        </div>
        <div className="singleCollection">
          <div className="nahuales">
            <img src="/nahuales.svg" className="nahualesImage" />
            <h1 className="collectionOverlayNahuales">NAHUALES</h1>
            <p className="textBoxRed">Shop Now</p>
          </div>
          <p className="nahualesText">
          Introducing “nahuales” a captivating capsule collection inspired 
          by indigenous dance jewelry, crafted by Salvadoran artisans of 
          mayan heritage. Rooted in chromotherapy principles, this collection 
          exudes vibrancy and meaning. Each piece features beadwork with colorful 
          geometric designs and one of the twenty Mayan Nahuales – symbols of energy 
          and spirit. “Nahual” means the essence of beings and nature. These accessories 
          offer a link to mayan culture and a connection to our heritage. This collection 
          invites customers to explore mayan traditions and discover their own nahual.
          </p>
        </div>
        <div className="singleCollection">
          <p className="cowboyHatsText">
          Our cowboy hat collection pays homage to the rich palm and yute weaving 
          techniques employed in crafting these iconic accessories. Each design is 
          hand-painted, making them one-of-a-kind and customizable. Originating from the 
          artisanal hubs of tenancingo and cojutepeque, this tradition traces back to the 
          skilled hands that fashioned hats for "el cipitio," a legendary figure in salvadoran 
          folklore. Designed for the adventurous and free-spirited, our hats embody a sense of 
          exploration and cultural heritage. In addition to their inherent craftsmanship, our 
          cowboy hats offer a personalized touch. 
          </p>
          <div className="cowboyHats">
            <img src="/cowboyHats.svg" className="cowboyHatsImage" />
            <h1 className="collectionOverlayHats">COWBOY HATS</h1>
            <p className="textBoxPink">Shop Now</p>
          </div>
        </div>
        <div className="singleCollection">
          <div className="sanSebastian">
            <img src="/sanSebastian.svg" className="sanSebastianImage" />
            <h1 className="collectionOverlaySanSebastian">SAN SEBASTIAN</h1>
            <p className="textBoxGray">Shop Now</p>
          </div>
          <p className="sanSebastianText">
          Presenting "San Sebastian," a refined capsule collection inspired 
          by the artisans of San Sebastian. Our goal is to honor and preserve 
          handloom weaving traditions while highlighting the beauty of handmade 
          fabrics and elevating everyday basics. This collection merges traditional 
          Salvadoran fashion with everyday wear, infusing delicate linen pieces with 
          colorful handwoven textiles.
          </p>
        </div>
      </div>

      <div className="bestSellers">
        <h1 className="header"> Best Sellers </h1>
      <BestSellers/>
      </div>

      <div className="instagram">
        <a href="https://www.instagram.com/_somoscandela/" target="_blank" rel="noopener noreferrer">@_somoscandela</a>
        <h1 className="header"> Shop Our Instagram </h1>
        <div className="instagram-posts">
        <a href="https://www.instagram.com/p/C4ZG0HvIx7w/" target="_blank" rel="noopener noreferrer">
          <img src="birds.png" className="image"/>
        </a>
        <a href="https://www.instagram.com/p/C4MT6j4IFlF/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src="boots.png" className="image" />
        </a>
        <a href="https://www.instagram.com/p/C4HITQUo74z/" target="_blank" rel="noopener noreferrer">
          <img src="cactus.png" className="image"/>
        </a>
        <a href="https://www.instagram.com/p/C36JtEDopdQ/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src="man.png" className="image"/>
        </a>
        </div>
      </div>

      <div className="contactInfo">
        <div className="format">
          <div className="getInTouch">
            <h2>GET IN TOUCH</h2>
            <div className="icons">
              <FaTwitter size = {25}/>
              <FaInstagram size = {25}/>
              <FaEnvelope size={25} />
              <p className="email">info@sequencecollection.com</p>
            </div>
          </div>
          <div className="newsletter">
            <h2>NEWSLETTER</h2>
            <p>Sign up for the latest news, offers, and styles</p>
            <div className = "input-group">
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
              </div>
          </div>
        </div>
        <div className ="space">
          
        </div>
        <p>@CopyRight © 2024, Sequence Collection. Ecommerce Software by Shopify</p>
        <p>Design by GreySkyGraphics</p>
      </div>
    </div>
  );
}

const NewestCollection = () => {
  return (
    <div className="horizontal-scroll-container">
      <div className="horizontal-scroll">
        {/* Items go here */}
        <div className="item">
          <img src="/defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 1</p>
            <p>$10</p>
          </div>
        </div>
        <div className="item">
          <img src="/defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 2</p>
            <p>$20</p>
          </div>
        </div>
        <div className="item">
          <img src="/defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 3</p>
            <p>$30</p>
          </div>
        </div>
        <div className="item">
          <img src="/defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 4</p>
            <p>$40</p>
          </div>
        </div>
        <div className="item">
          <img src="/defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 5</p>
            <p>$50</p>
          </div>
        </div>
        <div className="item">
          <img src="/defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 6</p>
            <p>$60</p>
          </div>
        </div>
        <div className="item">
          <img src="/defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 7</p>
            <p>$70</p>
          </div>
        </div>
        <div className="item">
          <img src="/defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 8</p>
            <p>$80</p>
          </div>
        </div>
        {/* Add more items as needed */}
      </div>
    </div>
  );
}

const BestSellers = () => {
  return (
    <div className="horizontal-scroll-container">
      <div className="horizontal-scroll">
        {/* Items go here */}
        <div className="item">
          <img src="/defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 1</p>
            <p>$10</p>
          </div>
        </div>
        <div className="item">
          <img src="/defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 2</p>
            <p>$20</p>
          </div>
        </div>
        <div className="item">
          <img src="/defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 3</p>
            <p>$30</p>
          </div>
        </div>
        <div className="item">
          <img src="/defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 4</p>
            <p>$40</p>
          </div>
        </div>
        <div className="item">
          <img src="/defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 5</p>
            <p>$50</p>
          </div>
        </div>
        <div className="item">
          <img src="/defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 6</p>
            <p>$60</p>
          </div>
        </div>
        <div className="item">
          <img src="/defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 7</p>
            <p>$70</p>
          </div>
        </div>
        <div className="item">
          <img src="/defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 8</p>
            <p>$80</p>
          </div>
        </div>
        {/* Add more items as needed */}
      </div>
    </div>
  );
}

const RowOfCircles =() =>{
  return (
    <div className="rowCircles">
      <FaCircle size = {30} style={{ color: '#3f464f' }}/>
      <FaCircle size = {30} style={{color: '#574f3b' }}/>
      <FaCircle size = {30} style={{color: "#a39d8c"}}/>
      <FaCircle size = {30} style={{color: '#5e594b'}}/>
    </div>
  );
}