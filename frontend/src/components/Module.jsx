import React, { useContext, useState } from 'react'
import { Videoplayer } from './Videoplayer'
import { GrLinkNext } from "react-icons/gr";
import { Datacontext } from '../context/Datacontext';


export const Module = (prop) => {
  const{progress,complete_progress,setcomplete_progress}=useContext(Datacontext)
 
   
    if(progress*100>complete_progress){
       setcomplete_progress(progress*100)
    }

    
  return (
    <div className="flex w-screen h-screen justify-center items-center">
        <div className="flex w-[90%] h-full">
        <div className="flex flex-col gap-5 w-[50%] items-center ">
            <div className="flex w-[100%] mt-[10%]  text-[28px] font-semibold ">
                <div>Module {1}:</div>
                <div>{prop.modelheading}</div>  
            </div>

            <div className="inline text-[28px]  text-wrap">
                <div className=" inline " >{prop.firstheading} :</div>
                <div className="inline">{prop.firstcon}</div>
            </div>
            <div className="inline text-[28px]  text-wrap">
                <div  className="inline ">{prop.secondheading} :</div>
                <div className='inline'>{prop.secondcon}</div>
            </div>
            <div className="inline text-[28px]  text-wrap">
                <div  className="inline ">{prop.thirdheading} :</div>
                <div className='inline' >{prop.thirdcon}</div>
            </div>
        </div>
        <div className="flex-col w-[50%] ">
            <div className="flex w-full h-[20%] justify-end pt-[3%] mr-5 ">
                <div className="flex justify-center items-center rounded-full h-[100px] w-[100px] bg-blue-300">
                    <div className="flex justify-center items-center rounded-full h-[80px] w-[80px] bg-white">
                       {(complete_progress>progress && Math.floor(complete_progress)) || (Math.floor(progress*100))}%
                    </div>
                </div>
            </div>

            <div className="flex-col  w-full h-[80%]  justify-center ">
            <div className="flex justify-center items-center w-full  h-[450px]">
            <Videoplayer></Videoplayer>
            </div>

            <div className="flex w-full justify-end pr-5 font-semibold">
            <div className="flex justify-center   w-fit h-fit mt-5">
            <div>Module {prop.nextModule_no} :</div>
                <div>{prop.nextModule}</div>
                <div className=" flex justify-center items-center ml-2 mr-2 w-[30px] h-[30px] rounded-full  bg-blue-400">
                    <GrLinkNext size={24}></GrLinkNext>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}
