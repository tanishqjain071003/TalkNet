import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();
  const logout = () =>{

    localStorage.removeItem("token");
    navigate('/signup')

  }
  return (
    <div className="flex justify-start">
      <button onClick = {logout} className='btn w-20 p-2 mt-auto'>Logout</button>
    </div>
  )
}

export default LogoutButton