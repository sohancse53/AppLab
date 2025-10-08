import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const Root = () => {
    return (
        <div className=''>
            <Navbar/>
            <Banner/>
            <div className='px-4 md:px-8 lg:px-12 bg-gray-50 
            min-h-[calc(100vh-288px)] container   mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;