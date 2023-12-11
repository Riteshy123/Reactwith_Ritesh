import React from 'react'
import {useState, useEffect} from 'react';
function ClearUp() {

    const [widthCount, setwidthCount] = useState(window.screen.width);
    
    const currentScreenWidth = () => {
      setwidthCount( () => window.innerWidth );
    }
    useEffect( ()=>{
      window.addEventListener("resize", currentScreenWidth)

      return () => {
        window.removeEventListener("resize", currentScreenWidth);
      }
    });

  return (
    <>
    <div>ClearUp</div>
    <h2>My PC's window size is <span> {widthCount} </span> </h2>
    </>

  )
}

export default ClearUp
