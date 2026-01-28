import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Counter from './component/Counter'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import Hook from './Hooks/Hook'
import Login from './Auth/Login'
import Signup from './Auth/Signup.jsx'
import {Route,Routes} from 'react-router-dom'
import UseEffectApi from './Hooks/UseEffectApi'
import UseRef from './Hooks/UseRef'

const App = () => {
 
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home name="Thassu"/>}/>
        <Route path='/about' element={<About name="Thassu" age={21} dept="CSE(DS)"/>}/>
        <Route path='/Contact' element={<Contact c="This is Contact"/>}/>
        <Route path='/Service' element={<Service/>}/>
        
        <Route path='/Login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        {/* Hooks*/}
        <Route path='/hook' element={<Hook/>}>
          <Route path='UseState' element={<UseState/>}/>
          <Route path='useEffect' element={<UseEffect/>}/>
          <Route path='useEffectApi' element={<UseEffectApi/>}/>
          <Route path='useRef' element={<UseRef/>}/>
        </Route>    

      </Routes>
      
    </div>
  )
}

export default App