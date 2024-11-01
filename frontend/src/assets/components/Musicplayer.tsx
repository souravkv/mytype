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
        {musicicon?<TbHeadphonesOff onClick={()=>{setMusicicon(!musicicon);handleplay();}}   size={25}/>:<FaHeadphones size={25} onClick={()=>{setMusicicon(!musicicon) ;handlepause() ;} } />}
    </div>
  )
}

export default Musicplayer