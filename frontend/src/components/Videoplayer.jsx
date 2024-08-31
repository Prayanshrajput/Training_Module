import React, { useContext } from 'react'
import { useRef,useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { TbRewindBackward10 } from "react-icons/tb";
import { FaPause, FaPlay } from 'react-icons/fa';
import { MdFullscreen } from 'react-icons/md';
import { Datacontext } from '../context/Datacontext';

export const Videoplayer = () => {

    const playerRef = useRef(null);
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(true);
    const [muted, setMuted] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const[seekbar,setseekbar]=useState(0)
    // const [progress, setProgress] = useState(0);
    const {progress, setProgress,complete_progress}=useContext(Datacontext)
  
    const handlePlayPause = () => {
      setPlaying(!playing);
    };
  
    const handleMuteUnmute = () => {
      setMuted(!muted);
    };
  
    const handleForward = () => {
      playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
    };
  
    const handleBackward = () => {
      playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
    };
  
    const handleVolumeChange = (event) => {
      setVolume(parseFloat(event.target.value));
    };



    const handleSeek = (e) => {
      const newTime = parseFloat(e.target.value);

      if(newTime<=progress){
        playerRef.current.seekTo(newTime, 'fraction');
         setProgress(newTime);
      }
      else{
        alert("forworing is not possible")
      }
 

    };
    
    
    const handleProgress = (state) => {
      
        if(progress<state.played){
          setProgress(state.played);
        }
     
    };
  
    const enterFullScreen = () => {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) { // Firefox
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) { // IE/Edge
        divRef.current.msRequestFullscreen();
      }
    };
  
    return (
      <div className="flex w-[600px] h-[600px] justify-center items-center ">
        <div ref={videoRef} className="flex flex-col justify-center items-center w-[70%] h-[50%] border border-white bg-slate-500">
        <ReactPlayer
          url="/Video2.mp4"
          ref={playerRef}
          playing={playing}
          muted={muted}
          volume={volume}
          onProgress={handleProgress}
          controls={false}  
        className="flex w-[100px] h-[100px]"
        // wrapperStyle={{ position: 'relative', width: '100%', height: '450px' }}
        />
  
       
        <div className="flex gap-5 bg-slate-400 w-[152%] h-full">
          
          <button onClick={handleBackward}><TbRewindBackward10 size={24} ></TbRewindBackward10></button>
          <button onClick={handlePlayPause}>
            {playing ? <FaPause size={24} /> : <FaPlay size={24} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
          
         <input
          type="range"
          className="flex w-[60%]"
          min="0"
          max="1"
          step="0.01"
          value={progress}
          onChange={handleSeek}
        />
        
          <button onClick={enterFullScreen}><MdFullscreen size={24}/></button>
          
        </div>
      </div>
      </div>
    );
}
