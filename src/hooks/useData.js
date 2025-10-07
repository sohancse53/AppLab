import { useEffect, useState } from "react"

const useData = () =>{
    const [cards,setCards] =useState([]); 
    const [loading,setLoading] =useState(true); 
    const [error,setError] =useState(null);
    useEffect(()=>{
        setLoading(true)
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
        .catch(err=>setError(err))
        setLoading(false);
    },[]) 
    
    return [cards,loading,error];
}

export default useData;