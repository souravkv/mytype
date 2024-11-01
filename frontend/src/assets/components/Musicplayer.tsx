import { useRef, useState } from "react";
import { FaHeadphones } from "react-icons/fa";
import { TbHeadphonesOff } from "react-icons/tb";
import bluedream from "../bluedream.mp3"


function Musicplayer() {
    const audioRef = useRef(null);

    function handleplay(){
            if(audioRef.current){
                audioRef.current.play();
            }
    }

    function handlepause(){
        if(audioRef.current){
            audioRef.current.pause();
        }
    }
    

    const [musicicon,setMusicicon]=useState(true);
  return (
    <div>
        <audio ref={audioRef} src={bluedream} />
        {musicicon?<FaHeadphones size={25} onClick={()=>{setMusicicon(!musicicon) ;handleplay() ;} } />:<TbHeadphonesOff onClick={()=>{setMusicicon(!musicicon);handlepause();console.log("paused")}}   size={25}/>}
    </div>
  )
}

export default Musicplayer