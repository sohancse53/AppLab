import React, { useState } from 'react';
import { getFromLocalStorage, updateLocalStorage } from '../Utility/LocalStorage';
import { FaDownload, FaStar } from 'react-icons/fa';

const Install = () => {
    const storedItems = getFromLocalStorage();
    const [installList,setInstallList] = useState(storedItems);
    const [order,setOrder] = useState("none");

    const sortedCards = (()=>{
        if(order==='asc'){
            return [...installList].sort((a,b)=>parseFloat(a.downloads)- parseFloat(b.downloads))
        }
        else  if(order==='dsc'){
            return [...installList].sort((a,b)=>parseFloat(b.downloads)- parseFloat(a.downloads))
        }
        else{
            return installList;
        }
    })();

    const handleUninstall = (id) =>{
    // console.log(id);

    const filteredCard = installList.filter(card=>card.id!==id)
    setInstallList(filteredCard);
    updateLocalStorage(id);
    }
    
    return (
       <div className='container mx-auto px-4 md:px-0'>
             <div className='py-12'>
           <div className='my-8'>
             <h1 className='text-4xl font-bold text-center'>Your Installed Apps</h1>
              <p className='text-xl text-slate-600 text-center'>Explore All Trending Apps on the Market developed by us</p>
           </div>
            <div className='flex justify-between'>
                <h1 className='font-bold '>({sortedCards.length})Apps Found</h1>
                <select onChange={(e)=>setOrder(e.target.value)} className='select' name="sort">
                    <option value="none">Sort By Downloads</option>
                    <option value="asc">Low To High</option>
                    <option value="dsc">High To Low</option>
                </select>
            </div>
           
            {
                sortedCards.length? sortedCards.map(item=>
                    <div key={item.id}>
                        
                        <div className='flex  justify-between items-center  bg-white rounded-md shadow-md p-5 gap-20 my-5'>
                    <div className='flex gap-5 items-center justify-between'>
                        <img className='h-20 rounded-2xl' src={item.image} alt={item.title} />
                        <div className='flex flex-col justify-start'>
                            <h2 className='text-xl font-semibold'>{item.title}</h2>
                            <div className='flex justify-center items-center gap-3'>
                                <span className='text-green-400'><FaDownload/>{item.downloads}</span>
                                <span className='text-orange-400'><FaStar/>{item.ratingAvg}</span>
                                <span className=' text-slate-400 mt-4'>{item.size}MB</span>
                            </div>
                        </div>
                    </div>
                    <button onClick={()=>handleUninstall(item.id)} className='btn btn-accent text-white'>Uninstall</button>
                </div>
                    </div>
                ):<h1 className='animate-pulse text-2xl font-bold text-slate-600 text-center mt-10'>No App installed Yet</h1>
            }
        </div>
       </div>
    );
};

export default Install;



/*
  {
    "image": "/demo-app (2).webp",
    "title": "Pixel Dash",
    "companyName": "Nova Games",
    "id": 2,
    "description": "Fast-paced endless runner game with stunning neon visuals.",
    "size": 78,
    "reviews": "8.45K",
    "ratingAvg": 4.2,
    "downloads": "0.25M",
    "ratings": [
      { "name": "1 star", "count": 700 },
      { "name": "2 star", "count": 850 },
      { "name": "3 star", "count": 1700 },
      { "name": "4 star", "count": 2200 },
      { "name": "5 star", "count": 3100 }
    ]
  },

*/ 