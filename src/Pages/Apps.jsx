import React from 'react';
import useData from '../hooks/useData';
import AppCard from '../components/AppCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { Link } from 'react-router';

const Apps = () => {
    const [cards,loading,error] = useData();

    return (
        <div className='text-center space-y-6 py-12'>
           <div className='space-y-2'>
             <h1 className='text-4xl font-bold'>Our All Applications</h1>
            <p className='text-2xl text-slate-600'>Explore All Trending Apps on the Market developed by us</p>
           </div>
            {
                loading? <LoadingSpinner/>:
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                cards.map(card=><AppCard key={card.id} card={card}/>)
                }
                </div>
            }
        </div>
    );
};

export default Apps;