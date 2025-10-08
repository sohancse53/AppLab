import React from 'react';
import { MdReportGmailerrorred } from 'react-icons/md';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router';

const AppNotFound = () => {
    const navigate = useNavigate();
    return (
    
     
        <div className='flex justify-center items-center flex-col gap-5 mt-20 text-center'>
            <MdReportGmailerrorred className='text-9xl text-red-600' />
            <h1 className='uppercase text-6xl font-semibold'>Opps! App Not found</h1>
            <p className='text-2xl text-slate-600'>The App you are searching is not found on our system.  please try another apps</p>
            <button className="btn btn-secondary" onClick={()=>navigate(-1)}>Go Back</button>
        </div>
       
    
    );
};

export default AppNotFound;