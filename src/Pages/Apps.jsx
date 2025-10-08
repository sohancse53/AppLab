import React, { useEffect, useState } from 'react';
import useData from '../hooks/useData';
import AppCard from '../components/AppCard';
import LoadingSpinner from '../components/LoadingSpinner';
import AppNotFound from '../components/AppNotFound';


const Apps = () => {
    const [cards,loading,error] = useData();
    const [search,setSearch] = useState('')
    const [searchLoading,setSearchLoading] = useState(true);
    const [filteredCard,setFilteredCard] = useState([]);
    // console.log(search);
   useEffect(()=>{
    setSearchLoading(true)
     const term = search.trim().toLowerCase();
    const items = term? cards.filter(card=>card.title.toLowerCase().includes(term)) :cards;
      setTimeout(() => {
    setFilteredCard(items);
    setSearchLoading(false);
  }, 500);
   },[search.length,cards])

    return (
        <div className='text-center space-y-6 py-12 container mx-auto px-4 md:px-0'>
           <div className='space-y-2'>
             <h1 className='text-4xl font-bold'>Our All Applications</h1>
            <p className='text-2xl text-slate-600'>Explore All Trending Apps on the Market developed by us</p>
           </div>
           <div className='flex justify-between items-center'>
            <h1 className='text-xl font-bold'>({filteredCard.length}) Apps Found</h1>
            {/* search field */}
            <label className="input">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
              </svg>
              <input value={search} onChange={(e)=>setSearch(e.target.value)}   type="search" required placeholder="Search" />
             </label>


           </div>
          {
           
            
               (searchLoading ||  loading)? <LoadingSpinner/>:
               filteredCard.length === 0?<AppNotFound/>: <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                filteredCard.map(card=><AppCard key={card.id} card={card}/>)
                }
                </div>
           
          }
        </div>
    );
};

export default Apps;