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
      {/* <Module></Module> */}
      <Videoplayer></Videoplayer>
    </div>
  )
}

export default App
