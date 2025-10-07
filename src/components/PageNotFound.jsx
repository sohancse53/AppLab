import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageNotFound = () => {
  return (
 <div className="flex flex-col h-screen">
 <Navbar/>
    <div className="flex-1">
      <div className=" flex justify-center items-center flex-col gap-5 mt-20 text-center">
        <img src="/Group (1).png" alt="404" />
        <h1 className="uppercase text-6xl font-semibold">
          Opps! Page Not found
        </h1>
        <p className="text-2xl text-slate-600">
          The App you are searching is not found on our system. please try
          another apps 
        </p>
      </div>
    </div>
    <Footer/>
 </div >
  );
};

export default PageNotFound;
