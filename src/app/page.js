import react from 'react';
import './page.css';
import { FiAlignJustify } from "react-icons/fi";
import { FaHome, FaUser } from 'react-icons/fa';

//default indicates that this is the home page
//use classname to create different components
export default function Home() {
  return (
    <div className="container">
    
      <div className="topBar">
        <FiAlignJustify size = {35}/>
        <img src="/candelalogo.svg" alt="logo" className="logoImage" />
        filler
      </div>

      <div className="dropDownMenu">
        <p>this will be the dropdown menu</p>
      </div>

      <div className="videoPage">
        <p> this will be the video story</p>
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
