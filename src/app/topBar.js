'use client'
import react, {useState} from 'react';
import './page.css';
import { FiAlignJustify } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

import Link from 'next/link';
import { IoCartOutline } from "react-icons/io5";

export default function TopBar({paramHelp}) {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    return (
        <div className="topBar">
            <FiAlignJustify className="icon"  onClick={toggleSidebar} style={{ marginLeft: '20px' }}/>
            <Link href="/"><img src={paramHelp+"candelaLogo.png"} alt="logo" className="logoImage"/></Link>
            <div className="searchInstaBag">
                <a href="https://www.instagram.com/_somoscandela/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icon"/>
                </a>
                <Link href="/myCart"><IoCartOutline className="icon"/></Link>

            </div>
            <div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
                <ul>
                    <li><FiAlignJustify className="icon" onClick={toggleSidebar}/></li>
                    <li><p>Coming soon!</p></li>

                </ul>
            </div>
        </div>
    );
}
