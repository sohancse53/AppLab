import React, { useEffect, useState } from "react";
import {useParams } from "react-router";
import useData from "../hooks/useData";
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { Bar, CartesianGrid, ComposedChart,  ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import LoadingSpinner from "../components/LoadingSpinner";
import AppNotFound from "../components/AppNotFound";
import { getFromLocalStorage, setToLocalStorage } from "../Utility/LocalStorage";
import { Bounce, toast } from "react-toastify";

const AppDetails = () => {
  const [installed,setInstalled] = useState(false)
  const [cards,loading,error] = useData();
  const [card,setCard] = useState(null);
  const [valid, setValid] = useState(false);

  const { appId } = useParams();


  const convertedId = parseInt(appId);
// console.log(appId);


// getting the specific card data
 useEffect(()=>{
   if(!loading){
      const foundCard= cards.find(card=>parseInt(card.id)=== convertedId)
      setCard(foundCard || null);
      setValid(!!foundCard) 
  }
 },[cards,loading,convertedId])



  // Check  card is already in local storage
  useEffect(() => {
    if (card) {
      const storedItems = getFromLocalStorage();
      const exists = storedItems.some(item => item.id === card.id);
      setInstalled(exists);
    }
  }, [card]);



// set validity
if(isNaN(appId)){
    return (<AppNotFound/>);
}
 if(loading){
  return (<LoadingSpinner/>);
 }
 if(error || !valid || !card){
  return(<AppNotFound/>);
 }
// console.log(valid);

// console.log(typeof convertedId);

  
    const {image,title,companyName,downloads,reviews,ratingAvg,ratings,description,size} = card;

    const reversedRatings = ratings && [...ratings].reverse();



//  local storage
    const handleInstall = (card)=>{
    
    setToLocalStorage(card);
    setInstalled(true)
    toast.success(`(${card.title} ) Installed Successfully`,
      {
position: "top-left",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
}
    )

    }

  

  return(
<div className="container mx-auto px-4 md:px-0">
     <div className=" flex items-center justify-start flex-col lg:flex-row gap-5 rounded border-b p-5 border-slate-400 w-full  shadow-md ">
          <img className="h-64 w-64" src={image} alt="" />
          <div className=" flex-1">
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-lg text-slate-600">Developed by <span className="text-green-600">{companyName}</span></p>
            <div className="flex border-t border-slate-400 pt-6 gap-6">
                <div className="flex flex-col">
                    <FaDownload className="text-3xl text-green-500"/>
                    <span className="text-slate-600">Downloads</span>
                    <span className="font-bold text-2xl">{downloads}</span>
                </div>
                <div className="flex flex-col">
                    <FaStar className="text-3xl text-orange-500"/>
                    <span className="text-slate-600">Average Rating</span>
                    <span className="font-bold text-2xl">{ratingAvg}</span>
                </div>
                <div className="flex flex-col">
                    <MdReviews className="text-3xl text-blue-500"/>
                    <span className="text-slate-600">Reviews</span>
                    <span className="font-bold text-2xl">{reviews}</span>
                </div>
            </div>
            <button 
            disabled={installed?true:false}
            
            onClick={()=>handleInstall(card)} className="btn btn-success mt-5 text-white font-semibold text-lg">{installed?"Installed":`Install Now (${size}MB)`}</button>
          </div>
          
    </div>
    <div className="mt-8">
      <h2 className="text-2xl font-semibold my-5">Ratings</h2>
      <div className="w-full  h-90 border-y border-slate-200 shadow-md">
        <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={reversedRatings}
          margin={{
            top: 30,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number"/>
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          
         
          <Bar dataKey="count" barSize={30} fill="orange" />
        
        </ComposedChart>
      </ResponsiveContainer>
      </div>
    </div>

    <div className="my-12">
          <h1 className="text-2xl font-semibold my-5">Description</h1>
          <p className="text-slate-600">{description}</p>
    </div>
</div>
  );
};

export default AppDetails;