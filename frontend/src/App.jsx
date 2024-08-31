import { useRef,useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Videoplayer } from './components/Videoplayer'
import { Save_video } from './components/Save_video'
import { Model } from 'mongoose'
import { Module } from './components/Module'

function App() {
  return(
    <div>
      {/* <Save_video></Save_video> */}
      <Module modelheading={"Personal Protective Equipment (PPE)"}
      firstheading={"Importance of PPE"}
      firstcon={"Explain the significance of PPE in preventing injuries and illnesses in the workplace."}
      secondheading={"Types of PPE"}
      secondcon={"Introduce various types of PPE, such as hard hats, safety glasses, gloves, earplugs, respirators, and steel-toed boots."}
      thirdheading={"Proper Use and Maintenance"}
      thirdcon={"Demonstrate how to properly use and maintain PPE, including inspection procedures and storage guidelines."}
      nextModule_no={2}
      nextModule={"Fire Safety and Prevention"}
      ></Module>
      {/* <Videoplayer></Videoplayer> */}
    </div>
  )
}

export default App
