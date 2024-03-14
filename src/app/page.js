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
        <p> this will be the text story</p>
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
