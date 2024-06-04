'use client'
import react, {useState} from 'react';
import './itemLayout.css';
import Link from 'next/link';

export default function ItemLayout({images, desc, name, price, shortName}) {
    const newhref = `/preorder/${shortName}`;
    return (
        <div className="itemContainer">
                <img src={images[0]} className="firstCol"/>
            <div className="secondCol">
                <img src={images[1]}/>
                <img src={images[2]}/>
            </div>
            <div className="thridCol">
                <img src={images[3]} className="thirdImg"/>
                <Link href={newhref}><p className="button">Pre-Order</p></Link>
            </div>
        </div>
    );
}