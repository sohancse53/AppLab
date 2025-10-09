import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import { Link } from 'react-router';

const AppCard = ({card}) => {
   
    
   const {title,downloads,ratingAvg,image,id} = card;
    return (
        <Link  to={`/apps/${id}`} className='bg-white p-4 space-y-2 shadow-md rounded-md'>
            <img className='h-40 w-full object-cover shadow  rounded-md' src={image} alt={title} />
            <h2 className='text-xl font-semibold text-start'>{title}</h2>
            <div className='flex justify-between'>
                <button className='btn   text-accent'><IoMdDownload /> {downloads}</button>
                <button className='btn text-warning'><FaStar />  {ratingAvg}</button>
            </div>
                     
        </Link>
    );
};

export default AppCard;