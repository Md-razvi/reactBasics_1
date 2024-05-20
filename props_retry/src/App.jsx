import './App.css'
import Card from './Card'
function App() {
 

  return (
    <>
    <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind css</h1>
     <Card  name="Amy" btnText='Click Me'/>
     <Card  name="Jackson" btnText='View Now'/>
    </>
  )
}

export default App
