import react from 'react';
import './page.css';
import { FiAlignJustify } from "react-icons/fi";
import { FaInstagram} from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import ReactPlayer from 'react-player';

//default indicates that this is the home page
//use classname to create different components
export default function Home() {
  return (
    <div className="container">
    
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
        <p>this will be the dropdown menu</p>
      </div>

      <div className="videoPage">
        <p> attempting to show video. </p>
        <p> maybe look into react-player</p>
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
      </div>

      <div className="newestCollection">
        <p> this will be the newest collections</p>
      </div>

      <div className="allCollections">
        <p> this will be all collections</p>
      </div>

      <div className="bestSellers">
        <p> this will be best sellers</p>
      </div>

      <div className="instagramLink">
        <p> this will be instagram link</p>
      </div>

      <div className="getInTouch">
        <p> this will be instagram link</p>
      </div>

    </div>
  );
}
