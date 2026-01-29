import React from 'react'
import { useContext } from 'react'
import AuthContext from './context/AuthContext';
import ThemeContext from './context/ThemeContext';

const Service = () => {
    const theme = useContext(ThemeContext);
    const user =useContext(AuthContext);
  return (
    <div>
        <h1>{theme}</h1>
        <p>Id :{user.id}</p>
        <p>Name : {user.name}</p>
        <p>Email : {user.email}</p>
    </div>
  )
}


export default Service