

import React from 'react';
import './/Styles/header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='header flex h-20 w-auto justify-around items-center '>
            <img className='h-10  w-36'  src={logo} alt="Brand Logo" />
                <ul className='flex flex-row gap-3 sm:gap-7 cursor-pointer '>
                    <a className='hover:text-orange-400 font-semibold' href="/home">Home</a>
                    <a className='hover:text-orange-400 font-semibold' href="/blog">Blog</a>
                    <a className='hover:text-orange-400 font-semibold' href="/home">About</a>
                    <a className='hover:text-orange-400 font-semibold' href="/Home">Contact</a>
                </ul>
        </div>
    );
};

export default Header;