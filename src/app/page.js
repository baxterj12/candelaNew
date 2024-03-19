import react from 'react';
import './page.css';
import { FiAlignJustify } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';



//default indicates that this is the home page
//use classname to create different components
export default function Home() {
  return (
    <div class="w-full" className="container" >
    
      <div className="topBar">
        <FiAlignJustify size = {60} className="widen" />
        <img src="/candelalogo.svg" alt="logo" className="logoImage" />
        <div className="searchInstaBag">
          <IoSearch size = {50}/>
          <FaInstagram size = {50}/>
          <MdOutlineShoppingBag size = {50}/>
        </div>
      </div>

      <div className="dropDownMenu">
        <OurCollections/>
      </div>

      <div className="videoPage">
        <video src="/demovid.mp4" autoPlay loop class="w-full"/>
        <h1 className="overlay"> Pieces with soul. Made in El Salvador. </h1>
      </div>

      <div className="storyText">
          <h1 className="header">Welcome to Candela</h1>
            <p className="storyParagraphs"> "Candela is a love letter to the soul of Salvadoran culture. 
              With each meticulously handcrafted creation, we work to ignite a flame illuminating 
              a path for those who breathe life into our rich heritage, El Salvador artisans.
            </p>
            <p className="storyParagraphs">
            In a world where impersonal mass production often overshadows individuality, 
            Candela emerged in Founded in 2023; our brand proudly prioritizes sustainability by utilizing recycled
            and reused materials in our handmade creations, infusing each piece with a story of rebirth and renewal.
            </p>
            <p className="storyParagraphs">
              Our artisans, who come from six distinct towns in El Salvador, are not just skilled
              craftspeople; they are dream weavers, infusing their creations with the magic 
              of centuries-old traditions passed down through generations.
            </p>
            <p className="storyParagraphs">
              Candela proudly partners with Mater Filus, a Salvadorian women’s shelter,
              to empower women from at-risk backgrounds through training programs. 
              Furthermore, we actively support the local artistic community by 
              hosting educational events to preserve culture and foster job creation.
            </p>
            <p className="storyParagraphs">
              Candela stands as a tribute to our roots, weaving together the threads of 
              our heritage into a tapestry of dreams and serving as a timeless symbol of tradition and innovation."
            </p>
            <p> </p>
      </div>

      <div className="newestCollection">
        <h1 className="header"> Our Newest Collection: Floracion Pancha</h1>
        <NewestCollection/>
      </div>

      <div className="allCollections">
      <h1 className="header"> Our Collections</h1>
      <div className="singleCollection">
        <div className="headerAndPicture">
          <h1 className="collectionHeader">Floracion Pancha</h1>
          <img src="/floracionPancha.svg" alt="logo" className="collectionImage" />
        </div>
        <p className="collectionText">Every first sunday of may, the residents of panchimalco adorn themselves 
          with flowers and create colorful palm fronds that parade in the procession 
          in honor of the virgin of the rosary and the immaculate conception. To the 
          sounds of marimbas, the dance of the historiantes, and the smells of 
          traditional food, the “festival de las flores y las palmas” is celebrated. 
          this collection is a tribute to our history and the vibrant colors that 
          emanate from the celebration. It is crafted using traditional techniques 
          from El Salvador, such as waist loom weaving and manual sewing techniques.</p>
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

function OurCollections() {
  return (
    <Dropdown >
      <DropdownToggle variant="success" id="dropdown-basic">
        Our Collections
      </DropdownToggle>
      <DropdownMenu >
        <div className="filler" />
        <div><DropdownItem>Collection 1</DropdownItem></div>
        <div><DropdownItem>Collection 2</DropdownItem></div>
        <div><DropdownItem>Collection 3</DropdownItem></div>
      </DropdownMenu>
    </Dropdown>
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
