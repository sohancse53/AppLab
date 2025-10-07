import React from 'react';
import { MdReportGmailerrorred } from 'react-icons/md';
import Navbar from './Navbar';
import Footer from './Footer';

const AppNotFound = () => {
    return (
      <>
      <Navbar/>
        <div className='flex justify-center items-center flex-col gap-5 mt-20 text-center'>
            <MdReportGmailerrorred className='text-9xl text-red-600' />
            <h1 className='uppercase text-6xl font-semibold'>Opps! App Not found</h1>
            <p className='text-2xl text-slate-600'>The App you are searching is not found on our system.  please try another apps</p>
        </div>
        <Footer/>
      </>
    );
};

export default AppNotFound;