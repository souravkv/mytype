import { TiKeyboard } from "react-icons/ti";
import { FaHeadphones } from "react-icons/fa";
import './App.css'
import Wordbox from "./assets/Wordbox";
import Musicplayer from "./assets/components/Musicplayer";

function App() {
 

  return (
    <>
    <div className=' w-screen h-screen text-[#D1D0C5]  bg-[#323437]'>
      <div className=' flex items-center justify-between px-8'>
        <div></div>

        <div className=" flex">

          <div className=' flex  font-black  items-center justify-center px-2 py-5  text-xl'>MYTYPE</div>
          <div className=" items-center justify-center flex hover:opacity-40 hover:cursor-pointer duration-1000 "><TiKeyboard size={50} color="#a5a38d"/></div>
        </div>
        <div className=" hover:opacity-100 opacity-60 duration-700 cursor-pointer">
            <Musicplayer/>
        </div>
      </div>
     
     <div className=" text-[#71757c] w-400 h-250 overflow-y-scroll m-40 font-thin text-3xl  ">
        <Wordbox/>
     </div>
    </div>
    </>
  )
}

export default App
