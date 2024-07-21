import React, { useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import MessageContainer from '../../components/MessageContainer/MessageContainer.jsx'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(()=>{
    if(!token){
      navigate('/signup')
    }
  },[])
  return (
    
    <div className = "w-full h-full bg-gradient-to-r from-emerald-900 to-cyan-700 flex md:flex-row sm:h-[780px] md:h-[780px]">
        <Sidebar />
			  <MessageContainer />
    </div>
  )
}

export default Home
