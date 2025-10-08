import React from 'react';
import AppCard from '../components/AppCard';
import useData from '../hooks/useData';
import LoadingSpinner from '../components/LoadingSpinner';
import { Link } from 'react-router';

const Home = () => {
    const [cards] = useData();
    // console.log(cards);
    const eightCard = cards.slice(0,8) ;
    
    return (
        <div className='text-center space-y-6 py-12'>
           <div className='space-y-2'>
             <h1 className='text-4xl font-bold'>Trending Apps</h1>
            <p className='text-2xl text-slate-600'>Explore All Trending Apps on the Market developed by us</p>
           </div>
            {
                 cards.length===0 ? <LoadingSpinner/>:
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                eightCard.map(card=><AppCard key={card.id} card={card}/>)
                }
                </div>
            }
            <Link to="/apps" className='btn btn-primary px-10 text-lg'>Show All</Link>
        </div>
    );
};

export default Home;