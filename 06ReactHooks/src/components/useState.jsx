import { useState, useEffect } from 'react'


function UseState() {
  const [count, setCount] = useState(0)
   
   // Effect Hooks
   useEffect( ()=> {
     document.title = count;
   }, [count])

  return (
    <>
     <h1>Use of  useState - Counter</h1>
     <div className="container">

     <button onClick = { () => setCount(count+1)}>
        +
      </button>

      <button onClick={()=>count==0? setCount(0): setCount(count-1) }>
        -
      </button>

      <h1>{count}</h1>
     
     </div>
    </>
  )
}

export default UseState
