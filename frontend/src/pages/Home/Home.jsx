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
    <div className = "flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar />
			  <MessageContainer />
    </div>
  )
}

export default Home