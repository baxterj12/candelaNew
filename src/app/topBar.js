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
            <FiAlignJustify size = {60} className="widen" onClick={toggleSidebar}/>
            <Link href="/"><img src="/candelalogo.svg" alt="logo" className="logoImage" /></Link>
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
                    <li><Link href="/collections">Our Collections</Link></li>
                    <li><Link href="/story">Our Story</Link></li>
                    <li><Link href="/processes">Our Processes</Link></li>
                    <li><Link href="/partnerships">Our Partnerships</Link></li>
                    <li><Link href="/impact">Our Impact</Link></li>
                </ul>
            </div>
        </div>
    );
}