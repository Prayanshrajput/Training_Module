import React from 'react'
import { useRef,useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { TbRewindBackward10 } from "react-icons/tb";
import { FaPause, FaPlay } from 'react-icons/fa';
import { MdFullscreen } from 'react-icons/md';

export const Videoplayer = () => {

    const playerRef = useRef(null);
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(true);
    const [muted, setMuted] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const[seekbar,setseekbar]=useState(0)
  
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
      <div className="flex w-screen h-screen justify-center items-center ">
        <div ref={videoRef} className="flex flex-col justify-center items-center w-[70%] h-[50%] border border-white bg-slate-500">
        <ReactPlayer
          url="/Video1.mp4"
          ref={playerRef}
          playing={playing}
          muted={muted}
          volume={volume}
          controls={false}  
        className="flex w-screen h-[95%]"
        />
  
       
        <div className="flex gap-5 bg-slate-400 w-full h-full">
          
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
            min="0"
            max="1"
            step="0.01"
            value={seekbar}
            className="flex w-[60%]"
          />
          <button onClick={enterFullScreen}><MdFullscreen size={24}/></button>
        </div>
      </div>
      </div>
    );
}
