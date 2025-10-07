import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar/>
            <div className='flex-1 bg-gray-50 max-w-screen-2xl mx-auto'>
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default Root;