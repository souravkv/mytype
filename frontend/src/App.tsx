import { TiKeyboard } from "react-icons/ti";
import './App.css'

function App() {
 

  return (
    <>
    <div className=' w-screen h-screen text-[#D1D0C5]  bg-[#323437]'>
      <div className=' flex items-center justify-center'>
        <div className=" flex">

          <div className=' flex  font-black  items-center justify-center px-2 py-5  text-xl'>MYTYPE</div>
          <div className=" items-center justify-center flex hover:opacity-40 hover:cursor-pointer duration-1000 "><TiKeyboard size={50} color="#a5a38d"/></div>
        </div>
      </div>
     
    </div>
    </>
  )
}

export default App