'use client'
import react, {useState} from 'react';
import './page.css';
import { FiAlignJustify } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function TopBar() {
    return (
        <div className="topBar">
            <FiAlignJustify size = {60} className="widen"/>
            <img src="/candelalogo.svg" alt="logo" className="logoImage" />
            <div className="searchInstaBag">
            <IoSearch size = {50}/>
            <a href="https://www.instagram.com/_somoscandela/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size = {50}/>
            </a>
            <MdOutlineShoppingBag size = {50}/>
            </div>
        </div>
    );
}