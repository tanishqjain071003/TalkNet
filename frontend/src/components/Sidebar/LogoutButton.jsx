import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();
  const logout = () =>{

    localStorage.removeItem("token");
    navigate('/signup')

  }
  return (
    <div className="mt-2 flex justify-start">
      <button onClick={logout}className="btn w-16 h-8 p-2 mt-auto btn-outline btn-error">Logout</button>
    </div>
  )
}

export default LogoutButton
