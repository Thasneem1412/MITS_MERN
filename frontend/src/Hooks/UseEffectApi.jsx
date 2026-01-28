import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const UseEffectApi = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")

        .then((res)=>res.json())
        .then((data)=>setUsers(data));
    },[])
  return (
    <div>
        <ul>
            {users.map((user,index)=>(
               <li Key={index}>  
                   <p>Name:{user.name}</p>
                   <p>Name:{user.email}</p>
                   <p>Latitude:{user.address.geo.lat}</p>
                </li>
           ))}</ul></div>
            
  )
}

export default UseEffectApi