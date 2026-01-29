 import React,{useEffect,useState} from 'react'
 import { useRef} from 'react';

const UseRef = () => {

    const [count,setCount]=useState(0);
    const value=useRef(0);
    const inputRef=useRef();

    useEffect(()=>{
        value.current=value.current+1;
    })
    const handleClick=()=>{
    inputRef.current.focus();
    inputRef.current.style.color="blue";
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Inc</button>
        <p>{`${value.current} times component rendered`}</p>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>submit</button>
        
    </div>
  )
}

export default UseRef
