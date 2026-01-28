import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEffect = () => {

    const [count,setCount]=useState(0);
    const [value,setValue]=useState(0);
    useEffect(()=>{
        console.log("useEffect Mounted")
    },[count,value])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>inc</button>
        <h1>{value}</h1>
        <button onClick={()=>setValue(value+1)}>inc</button>

                
    </div>
  )
}

export default UseEffect