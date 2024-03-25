


import React from 'react';
import './Cover.css'
import image from '../../images/ai-fashion-week-voguebus-story.webp'
const Cover = () => {
    return (
            
        <div className='cover-container md:flex flex-row-reverse justify-around items-center sm:px-24 mx-auto'>
            <div className=' relative p-3 mt-3 sm:mt-10 sm:mt-none md:w-4/12'>
                <div className='image-frame m-3 relative  bottom-4 rounded-md '> 
                    <img className='images-class relative bottom-4 left-4 rounded-md  ' src={image} alt="" />
                </div>
            </div>

            <div className='discoun-section text-wrap relative w-full h-72 sm:h-80 sm:w-6/12 '>
                <p className='discount-text  w-full h-auto sm:h-7 sm:w-34'>Sale up to 70% off</p>
                <h1 className='discount-header w-full h-auto sm:mt-14 mt-7 text-5xl  sm:text-6xl font-semibold '>New Collection For Fall</h1>
                <p className=' discount-p w-full h-auto mt-2 text-2xl'>Discover all the new arrivals of ready-to-wear collection.</p>

                <button className=' w-full my-2 h-auto absolute px-5 py-2  bottom-0 sm:h-14 sm:w-52 rounded-md'>
                    <a className=' w-full h-auto  sm:h-9 sm:w-48 font-semibold' href="/shop-now">Shop Now</a>
                </button>
            </div>
        </div>
    );
};

export default Cover;