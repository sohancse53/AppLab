import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className=''>
            <Navbar/>
            
            <div className='bg-gray-50 
            min-h-[calc(100vh-288px)]  mx-auto'>
                <Outlet />
            </div>
            <Footer />
            <ToastContainer/>
        </div>
    );
};

export default Root;