import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
       <div className='bg-gray-100'>

         <div className='text-center p-6'>
            <h1 className='text-4xl font-bold mt-5'>We Build</h1>
            <h1 className='text-4xl font-bold'><span className='text-blue-700'>Productive</span> Apps</h1>
            <p className='text-slate-600 my-4 textjs'>At AppLap , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center gap-4'>
                <Link target='blank' to="https://play.google.com/store/games?hl=es_419" className='btn py-6 text-lg'>
                    <img src="/playStore.png" alt="play store" />Google Play
                </Link>
                <Link target='blank' to="https://www.apple.com/app-store/" className='btn py-6 text-lg'>
                    <img src="/appStore.png" alt="App store" />App Store
                </Link>
            </div>
        </div>

        <div className='text-center'>
            <img className='mx-auto' src="/hero.png" alt="" />
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-5  p-20'>
                <h1 className='text-3xl text-white font-semibold mb-5'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-center gap-10 md:gap-20 flex-wrap'>
                   <div>
                        <p className='text-gray-200'>Total Download</p>
                        <h1 className='text-4xl font-bold text-white'>29.6M</h1>
                        <p className='text-gray-200'>21% more than last month</p>
                    </div> 
                   <div>
                        <p className='text-gray-200'>Total Review</p>
                        <h1 className='text-4xl font-bold text-white'>906K</h1>
                        <p className='text-gray-200'>46% more than last month</p>
                    </div> 
                   <div>
                        <p className='text-gray-200'>Active Apps</p>
                        <h1 className='text-4xl font-bold text-white'>132+</h1>
                        <p className='text-gray-200'>31 More Will Launch</p>
                    </div> 
                </div>
            </div>
        </div>

       </div>
    );
};

export default Banner;