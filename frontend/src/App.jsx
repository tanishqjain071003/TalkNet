import { useState } from 'react'
import Login from "./pages/Login/Login.jsx"
import './App.css'
import Signup from './pages/Signup/Signup.jsx'
import Home from './pages/Home/Home.jsx'
import {Route,Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='p-4 h h-screen flex items-center justify-center'>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/login' element = {<Login/>}/>
          <Route path = '/signup' element = {<Signup/>}/>
        </Routes>
        
      </div>
    </>
  )
}

export default App
