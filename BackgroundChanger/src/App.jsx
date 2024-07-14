import { useState } from "react"

function App() {
  const[color, setColor]  = useState("olive");
  return (
    <>
   <div className="w-full h-screen duration-200"style = {{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button 
              onClick={() => setColor("gray")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white" 
              style={{backgroundColor:"gray"}}>
              Gray
            </button>
            <button 
             onClick={() => setColor("Green")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white" 
              style={{backgroundColor:"green"}}>
              Green
            </button>
            <button 
              onClick={() => setColor("Yellow")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-black" 
              style={{backgroundColor:"Yellow"}}>
              Yellow
            </button>
            <button 
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white" 
              style={{backgroundColor:"Purple"}}>
              Purple
            </button>
            <button 
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white" 
              style={{backgroundColor:"Blue"}}>
              Blue
            </button>
            <button 
              onClick={() => setColor("Black")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white" 
              style={{backgroundColor:"Black"}}>
              Black
            </button>
            <button 
              onClick={() => setColor("Brown")}
             className="outline-none px-4 py-1 rounded-full shadow-lg text-white" 
             style={{backgroundColor:"Brown"}}>
              Brown
            </button>
            <button 
              onClick={() => setColor("white")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-black" 
              style={{backgroundColor:"white"}}>
              white
            </button>
        </div>
      </div>
   </div>
    </>
  )
}

export default App
