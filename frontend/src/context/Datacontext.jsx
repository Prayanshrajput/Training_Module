import {createContext, useEffect, useState } from "react";


export const Datacontext=createContext()

export default function DatacontextProvider({children}){

    const[data,setdata]=useState([])
    const[progress, setProgress]=useState(0)
    const[complete_progress,setcomplete_progress]=useState(0)
    const[ind,setind]=useState(0)
   

useEffect(()=>{
    fetchquize()
},[])

const fetchquize=async()=>{
    try{
const response= await fetch("http://localhost:8000/fetchmodules")
const temp= await response.json();
 setdata(temp.data)
 console.log(temp.data)
    }
    catch(error){
        console.log(error)
        setdata([])
    }
}


const value={
   data,setdata,
   progress, setProgress,
   complete_progress,setcomplete_progress,
   ind,setind
}

return <Datacontext.Provider value={value}>
    {children}
</Datacontext.Provider>
}

