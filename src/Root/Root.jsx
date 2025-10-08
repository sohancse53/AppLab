import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div className=' h-screen flex flex-col bg-gray-50'>
            <Navbar/>
            <div className=' px-4 md:px-8 lg:px-12 bg-gray-50 max-w-7xl mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;