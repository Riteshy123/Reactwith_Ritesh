import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 function App() {

  // let counter=5;
  let [counter, setcounter] = useState(0)

  const addvalue = () => {
    
    console.log("clicked" ,counter);
    setcounter(counter+1);
    
  }

  const decvalue = () => {
   
    console.log("- clicked", counter);
    setcounter(counter-1)
  }
  return (
    <>

    <h1>Reactwith_Ritesh</h1>
    <h2> counter value: {counter}</h2>
    <button onClick={addvalue}>+</button>
    <button onClick={decvalue}>-</button>

    </>
  )
 }
export default App
