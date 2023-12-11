
import './App.css'
import UseState from './components/useState'
import UseStateObject from './components/UseStateObject'
import UseEffect from './components/UseEffect/useEffect'
import ClearUp from './components/useEffect/ClearUp'
import UserContext from './components/useContext/userContext'
import Parent from './Parent'

function App() {
  
   const userData = {
    name: "ritesh",
    age: 28,
   };

  return (
    <>

       {/* <UseState /> */}
       {/* <UseStateObject /> */}
       {/* <UseEffect /> */}
       {/* <ClearUp /> */}
       <Parent user = {userData}/>
    </>
  )
}

export default App;
