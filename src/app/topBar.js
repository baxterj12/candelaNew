'use client'
import react, {useState} from 'react';
import './page.css';
import { FiAlignJustify } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import Link from 'next/link';

export default function TopBar() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    return (
        <div className="topBar">
            <FiAlignJustify size = {60}  onClick={toggleSidebar} style={{ marginLeft: '20px' }}/>
            <Link href="/"><img src="/candelaLogo.png" alt="logo" className="logoImage"/></Link>
            <div className="searchInstaBag">

                <a href="https://www.instagram.com/_somoscandela/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size = {60}/>
                </a>
            </div>
            <div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
                <ul>
                    <li><FiAlignJustify size = {60} onClick={toggleSidebar}/></li>
                    <li><p>Coming soon!</p></li>

                </ul>
            </div>
        </div>
    );
}
