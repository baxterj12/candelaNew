'use client'
import react, {useState, useRef} from 'react';
import './page.css';
import TopBar from './topBar.js';
import BottomBar from './bottomBar.js';
import { FaCircle } from "react-icons/fa6";
import { GoUnmute, GoMute } from "react-icons/go";

//default indicates that this is the home page
//use classname to create different components
export default function Home() {
  const [muted, muteVideo] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      muteVideo(video.muted);
    }
  };
  return (
    <div >
      <TopBar/>
      <div className="videoPage">
        <video ref= {videoRef} src="candelaMissUniverse.mp4" type="video/mp4" autoPlay muted loop playsinline preload="auto" class="w-full"/>
        <img src="smallLogo.svg" className="overlayLogo"/>
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

      {/*
      <div className="newestCollection">
        <h1 className="header"> NEW ARRIVALS</h1>
        <NewestCollection/>
      </div>

      <div className="allCollections">
      <div className="collectionDivider"></div>
        <h1 className="header"> Our Collections</h1>
        <div className="singleCollection">
          <div className="floracionPancha">
            <img src="floracionPancha.svg" className="floracionPanchaImage" />
            <h1 className="collectionOverlayPancha">FLORACIÓN PANCHA</h1>
          </div>
          <p className="floracionPanchaText">Floración Pancha is a tribute to our history and the 
          vibrant colors that emanate from the Panchimalco celebration of “las flores y las palmas.” 
          It is crafted using traditional techniques from El Salvador, such as waist loom weaving and 
          manual sewing techniques.</p>
        </div>
        <div className="collectionDivider"></div>
        <div className="singleCollection">
          <p className="laCiebaText">La Ceiba is a captivating capsule collection inspired by Indigenous 
          dance jewelry, meticulously crafted by Salvadoran artisans of Mayan heritage. Rooted in 
          chromotherapy principles, this vibrant collection embraces ancestral wisdom.
          </p>
          <div className="laCieba">
            <img src="laCieba.svg" className="laCiebaImage" />
            <h1 className="collectionOverlayLaCieba">LA <br />CIEBA</h1>
          </div>
        </div>
        <div className="collectionDivider"></div>
        <div className="singleCollection">
          <div className="nahuales">
            <img src="nahuales.svg" className="nahualesImage" />
            <h1 className="collectionOverlayNahuales">NAHUALES</h1>
          </div>
          <p className="nahualesText">
          Nahuales is a captivating capsule collection inspired by Indigenous dance jewelry, 
          crafted by Salvadoran artisans of Mayan descent. Each piece features beadwork with 
          colorful geometric designs and one of the twenty Mayan Nahuales – symbols of energy and spirit.
          </p>
        </div>
        <div className="collectionDivider"></div>
        <div className="singleCollection">
          <p className="cowboyHatsText">
          Our cowboy hats pay homage to the rich palm and yute weaving techniques employed 
          in crafting these iconic accessories. Each design is hand-painted, making them one 
          of a kind and customizable.
          </p>
          <div className="cowboyHats">
            <img src="cowboyHats.svg" className="cowboyHatsImage" />
            <h1 className="collectionOverlayHats">COWBOY <br />HATS</h1>
          </div>
        </div>
        <div className="collectionDivider"></div>
        <div className="singleCollection">
          <div className="sanSebastian">
            <img src="sanSebastian.svg" className="sanSebastianImage" />
            <h1 className="collectionOverlaySanSebastian">SAN <br />SEBASTIAN</h1>
          </div>
          <p className="sanSebastianText">
          San Sebastian is a refined capsule collection inspired by the artisans 
          of San Sebastian. Our goal is to honor and preserve handloom weaving 
          traditions while highlighting the beauty of handmade fabrics and elevating 
          everyday basics.
          </p>
        </div>
      </div>

      <div className="bestSellers">
        <h1 className="header"> Pre-order coming soon! </h1>
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
          </div>
          <div className='instagram-posts'>
            <a href="https://www.instagram.com/p/C36JtEDopdQ/?img_index=1" target="_blank" rel="noopener noreferrer">
              <img src="man.png" className="image"/>
            </a>
            <a href="https://www.instagram.com/p/C31DAffoAQ0/?img_index=1" target="_blank" rel="noopener noreferrer">
              <img src="hair.png" className="image"/>
            </a>
            <a href="https://www.instagram.com/p/C3taXuEIoog/?img_index=1" target="_blank" rel="noopener noreferrer">
              <img src="apple.png" className="image"/>
            </a>
          </div>
      </div>
      */}
    </div>
  );
}

const NewestCollection = () => {
  return (
    <div className="horizontal-scroll-container">
      <div className="horizontal-scroll">
        {/* Items go here */}
        <div className="item">
          <img src="defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 1</p>
            <p>$10</p>
          </div>
        </div>
        <div className="item">
          <img src="defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 2</p>
            <p>$20</p>
          </div>
        </div>
        <div className="item">
          <img src="defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 3</p>
            <p>$30</p>
          </div>
        </div>
        <div className="item">
          <img src="defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 4</p>
            <p>$40</p>
          </div>
        </div>
        <div className="item">
          <img src="defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 5</p>
            <p>$50</p>
          </div>
        </div>
        <div className="item">
          <img src="defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 6</p>
            <p>$60</p>
          </div>
        </div>
        <div className="item">
          <img src="defaultimage.JPG" className="itemImage"/>
          <RowOfCircles/>
          <div className="itemContent">
            <p>Product 7</p>
            <p>$70</p>
          </div>
        </div>
        <div className="item">
          <img src="defaultimage.JPG" className="itemImage"/>
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
        <div className="itemBS">
          <img src="defaultimage.JPG" className="itemImageBS"/>
          <RowOfCirclesBS/>
          <div className="itemContentBS">
            <p>Product 1</p>
            <p>$10</p>
          </div>
        </div>
        <div className="itemBS">
          <img src="defaultimage.JPG" className="itemImageBS"/>
          <RowOfCirclesBS/>
          <div className="itemContentBS">
            <p>Product 2</p>
            <p>$20</p>
          </div>
        </div>
        <div className="itemBS">
          <img src="defaultimage.JPG" className="itemImageBS"/>
          <RowOfCirclesBS/>
          <div className="itemContentBS">
            <p>Product 3</p>
            <p>$30</p>
          </div>
        </div>
        <div className="itemBS">
          <img src="defaultimage.JPG" className="itemImageBS"/>
          <RowOfCirclesBS/>
          <div className="itemContentBS">
            <p>Product 4</p>
            <p>$40</p>
          </div>
        </div>
        <div className="itemBS">
          <img src="defaultimage.JPG" className="itemImageBS"/>
          <RowOfCirclesBS/>
          <div className="itemContentBS">
            <p>Product 5</p>
            <p>$50</p>
          </div>
        </div>
        <div className="itemBS">
          <img src="defaultimage.JPG" className="itemImageBS"/>
          <RowOfCirclesBS/>
          <div className="itemContentBS">
            <p>Product 6</p>
            <p>$60</p>
          </div>
        </div>
        <div className="itemBS">
          <img src="defaultimage.JPG" className="itemImageBS"/>
          <RowOfCirclesBS/>
          <div className="itemContentBS">
            <p>Product 7</p>
            <p>$70</p>
          </div>
        </div>
        <div className="itemBS">
          <img src="defaultimage.JPG" className="itemImageBS"/>
          <RowOfCirclesBS/>
          <div className="itemContentBS">
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

const RowOfCirclesBS =() =>{
  return (
    <div className="rowCirclesBS">
      <FaCircle size = {30} style={{ color: '#3f464f' }}/>
      <FaCircle size = {30} style={{color: '#574f3b' }}/>
      <FaCircle size = {30} style={{color: "#a39d8c"}}/>
      <FaCircle size = {30} style={{color: '#5e594b'}}/>
    </div>
  );
}