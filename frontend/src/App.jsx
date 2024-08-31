import { useRef,useEffect, useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Videoplayer } from './components/Videoplayer'
import { Save_video } from './components/Save_video'
import { Model } from 'mongoose'
import { Module } from './components/Module'
import { Datacontext } from './context/Datacontext'

function App() {
  const{data,ind}=useContext(Datacontext)
console.log(ind)

  return(
    <div>
      
{
  data.length==0?(<div className="flex w-screen h-screen justify-center items-center">loading</div>):( <Module modelheading={data[ind].modelheading || "xyx"}
    firstheading={data[ind].firstheading}
    firstcon={data[ind].firstcon}
    secondheading={data[ind].secondheading}
    secondcon={data[ind].secondcon}
    thirdheading={data[ind].thirdheading}
    thirdcon={data[ind].thirdcon}
    nextModule_no={ind+2}
    nextModule={data[ind].nextModulename}
    ></Module>)
}

    </div>
  )
}

export default App
