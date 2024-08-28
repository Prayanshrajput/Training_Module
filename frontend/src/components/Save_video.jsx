import React from 'react'
import { useRef,useEffect, useState } from 'react'

export const Save_video = () => {

    const[showimage,setshowimage]=useState("")
    const[image,setimage]=useState("")

    // useEffect(()=>{
    //     setshowimage(prop.simg)
    //     setimage(prop.img)
    //   },[])

    const sendtodb=async()=>{ 
  
        try {
          const formData = new FormData();
          formData.append('img', image);
          console.log(formData)
      
          const response = await fetch('http://localhost:8000/image', 
          {
            method: 'POST',
            body: formData,
          }
          );
          const responseData = await response.json();
          console.log(responseData);
      } catch (error) {
          console.log(error.message);
      }
  
      }

if(false){
    return (
        <div className="ml-[400px] w-[250px] h-[250px] bg-slate-400 border border-y-zinc-950 absolute flex ">
        {!showimage?<h1></h1>:<div>
        <img src={showimage} alt="" height={250} width={250}/>
        <button className="font-extrabold bg-green-500" onClick={sendtodb}>upload</button>
        <button className="bg-red-600" onClick={()=>{go('/home' -1)}}>Back</button>
          </div>}
         
                </div>
    )
}

const filehandler=async(e)=>{

    console.log(e.target.files[0])
    var reader=new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload=()=>{
        // console.log(reader.result)
        var t=String(reader.result)
        setshowimage(reader.result)
        setimage(e.target.files[0])
        console.log(image||"nahi hai")
        setpoop(true)
  }
  }

  return (
    <div className="flex h-fit w-fit">
    <label
          className="bg-slate-600 rounded-2xl" >
            <input name='img' className="hidden" type="file" onChange={filehandler}/>
            Add Video
            </label>
    </div>
  )
}
