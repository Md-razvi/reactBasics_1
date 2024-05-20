
import { useState,useCallback } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
const [length,setLenght]=useState(0);
const [numberAllowed,setNumberAllowed]=useState(false);
const [characterAllowed,setCharacterAllowed]=useState(false);
const [password,setPassword]=useState()
const PasswordGenerator=useCallback(()=>{
let pass="";
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz";
if(numberAllowed)
  str+="1234567890"
if(characterAllowed)
  str+="!@#$%^&*()~`[]{}"




},
[length,numberAllowed,characterAllowed,setPassword])
  return (
   <div>   
      <h1 className='text=4l text-4xl text-center text-blue-100 font-bold '>
          Password Generator
      </h1>

   </div>
  )
}

export default App
