// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useState } from "react"

function App() {
  // const [count, setCount] = useState(0)
  const [color,setColor]=useState('lightblue')

  return (
   <div className="w-full h-screen duration-100" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

    <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button onClick={()=>setColor("Red")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>
        Red
      </button>
      <button onClick={()=>setColor("lightgreen")} 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"lightgreen"}}>
        Light Green
      </button>
      <button onClick={()=>setColor("blue")} 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>
        Blue
      </button>
      <button 
      onClick={
        ()=>setColor("violet")
        
      }
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
      style={{backgroundColor:"violet"}}>
        violet
      </button>
      </div>
    </div>

   </div>
  )
}

export default App
