import { useState } from "react";
import { FaHeadphones } from "react-icons/fa";
import { TbHeadphonesOff } from "react-icons/tb";

function Musicplayer() {

    const [musicicon,setMusicicon]=useState(true);
  return (
    <div>
        {musicicon?<FaHeadphones size={25} onClick={()=>{setMusicicon(!musicicon)}} />:<TbHeadphonesOff onClick={()=>{setMusicicon(!musicicon)}}   size={25}/>}
    </div>
  )
}

export default Musicplayer