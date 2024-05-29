'use client'
import react, {useState} from 'react';
import '../page.css';
import TopBar from '../topBar.js';
import BottomBar from '../bottomBar.js';
export default function CollectionsMain() {
    return (
        <div class="w-full">
            <TopBar/>
            <BottomBar/>
        </div>
    );
}