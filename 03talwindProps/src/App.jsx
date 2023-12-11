
import Card from './components/Card'
import './App.css'

function App() {
  
  let myObj={
    username:'ritesh',
    age:21
  }

  return (
    <>
     <h1 className='  bg-red-500  border-r-2'>Tailwind test</h1>
     <Card username="chaiaurcode" someObj = {myObj}/>
     <Card username="ritesh" />
     
    </>
  )
}

export default App;
