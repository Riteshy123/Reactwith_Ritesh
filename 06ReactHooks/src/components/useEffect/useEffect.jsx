import React from 'react'
import { useState, useEffect } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    
    useEffect( ()=>{
        document.title = count
    })

  return (
    <>
    <div>UseEffect</div>
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

export default UseEffect