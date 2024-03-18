import react from 'react';
import './page.css';
import { FiAlignJustify } from "react-icons/fi";
import { FaInstagram} from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
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
        <video src="/demovid.mp4" class="w-full"/>
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
      </div>

      <div className="allCollections">
      <h1 className="header"> All Collections</h1>
      </div>

      <div className="bestSellers">
      <h1 className="header"> Best Sellers </h1>
      </div>

      <div className="instagramLink">
        <p className="handle"> @_somoscandela</p>
        <h1 className="header"> Shop Our Instagram </h1>
      </div>

      <div className="getInTouch">
        <p> this will be contact info</p>
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