import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import useData from "../hooks/useData";
import { FaDownload } from "react-icons/fa6";
import { FaStar, FaStreetView } from "react-icons/fa";
import { MdReviews } from "react-icons/md";

const AppDetails = () => {
    const {state} = useLocation();
    const {image,title,companyName,downloads,reviews,ratingAvg,ratings,description,size} = state
  const [valid, setValid] = useState(false);
  const [cards] = useData();
  const { appId } = useParams();
  const convertedId = parseInt(appId);

  const arr = cards.map((card) => parseInt(card.id));

  useEffect(() => {
    if (arr.includes(convertedId)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [cards]);

console.log(state);


  return(
     <div className="flex items-center justify-between flex-col lg:flex-row gap-5 rounded border-b p-5 border-slate-400 w-full  shadow-md mt-4">
          <img className="" src={state.image} alt="" />
          <div className="">
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-lg text-slate-600">Developed by <span className="text-green-600">{companyName}</span></p>
            <div className="flex border-t border-slate-400 pt-6 gap-6">
                <div className="flex flex-col">
                    <FaDownload className="text-3xl"/>
                    <span className="text-slate-600">Downloads</span>
                    <span className="font-bold text-2xl">{downloads}</span>
                </div>
                <div className="flex flex-col">
                    <FaStar className="text-3xl"/>
                    <span className="text-slate-600">Average Rating</span>
                    <span className="font-bold text-2xl">{ratingAvg}</span>
                </div>
                <div className="flex flex-col">
                    <MdReviews className="text-3xl"/>
                    <span className="text-slate-600">Reviews</span>
                    <span className="font-bold text-2xl">{reviews}</span>
                </div>
            </div>
            <button className="btn btn-success mt-5 text-white">Install Now ({size}MB)</button>
          </div>
          
    </div>
  );
};

export default AppDetails;




// {
//     "image": "/demo-app (3).webp",
//     "title": "PhotoCraft",
//     "companyName": "VisionSoft",
//     "id": 3,
//     "description": "Professional photo editing app with filters, AI background removal, and effects.",
//     "size": 95,
//     "reviews": 30200,
//     "ratingAvg": 4.8,
//     "downloads": 1500000,
//     "ratings": [
//         {
//             "name": "1 star",
//             "count": 500
//         },
//         {
//             "name": "2 star",
//             "count": 700
//         },
//         {
//             "name": "3 star",
//             "count": 1400
//         },
//         {
//             "name": "4 star",
//             "count": 3600
//         },
//         {
//             "name": "5 star",
//             "count": 24000
//         }
//     ]
// }