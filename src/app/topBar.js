'use client'
import react, {useState} from 'react';
import './page.css';
import { FiAlignJustify } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function TopBar() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    return (
        <div className="topBar">
            <FiAlignJustify size = {60} className="widen" onClick={toggleSidebar}/>
            <img src="/candelalogo.svg" alt="logo" className="logoImage" />
            <div className="searchInstaBag">
                <IoSearch size = {50}/>
                <a href="https://www.instagram.com/_somoscandela/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size = {50}/>
                </a>
                <MdOutlineShoppingBag size = {50}/>
            </div>
            <div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
                <ul>
                    <li><FiAlignJustify size = {60} onClick={toggleSidebar}/></li>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}