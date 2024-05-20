import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]=useState(0);
// let counter=0;
const addValue=()=>{
  if(counter<20)
    {
      // counter++;
      setCounter((prevCounter)=>prevCounter+1)
      setCounter((prevCounter)=>prevCounter+1)

    }
}
const removeValue=()=>{
  if(counter<=0){
    counter=0;
    setCounter(counter)
  }else
  {
    
    counter=counter-1;
   setCounter(counter)

  }
  
}
  // const [count, setCount] = useState(0)
  
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>
      Counter Value:{counter}
    </h2>
    <div>
      <button
      onClick={addValue}
      >Add Value</button>
      <button
      onClick={removeValue}
      >Remove Value</button>
    </div>
    </>
  )
}

export default App
