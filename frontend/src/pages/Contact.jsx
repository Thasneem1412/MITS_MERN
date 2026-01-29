import React from 'react'
import {useState} from 'react'
import Service from './Service';

const Contact= () => {
    const [name,setName]=useState("Thassu");
    const toggleName=()=>{
    setName(name==="Thassu"?"Pitty":"Thassu")
    
        
    }
  return (
    <div>
        <h1>Name : {name}</h1>
        <button onClick={toggleName}>Toggle</button>
      
    </div>
  )
}


export default Contact


