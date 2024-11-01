import { TiKeyboard } from "react-icons/ti";
import { FaHeadphones } from "react-icons/fa";
import './App.css'
import Wordbox from "./assets/Wordbox";
import Musicplayer from "./assets/components/Musicplayer";
import HIghscorefooter from "./assets/components/HIghscorefooter";

function App() {
 

  return (
    <>
    <div className=' w-screen min-h-screen  text-[#D1D0C5]  bg-[#323437] flex flex-col  '>
      <div className=' flex items-center justify-between px-8'>
        <div></div>

        <div className=" flex  hover:opacity-90 hover:cursor-pointer duration-500 hover:translate-y-2 hover:scale-105 hover:text-[#E2B714] ">

          <div className=' flex  font-black  items-center justify-center px-2 py-5  text-xl'>MYTYPE</div>
          <div className=" items-center justify-center flex "><TiKeyboard size={50} color="#a5a38d"/></div>
        </div>
        <div className=" hover:opacity-100 opacity-60  duration-1000 cursor-pointer hover:scale-105">
            <Musicplayer/>
        </div>
      </div>
     
     <div className=" text-[#71757c] w-100 h-250 overflow-y-scroll m-32 font-thin text-3xl  ">
        <Wordbox/>
     </div>


     <div className="  ">
      <HIghscorefooter/>
     </div>
    </div>
    </>
  )
}

export default App
