import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link ,useNavigate} from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'

export const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username:"",
    password:"",
  });
  const {url} = useAuthContext();
  
  const onLogin = async(e) =>{
    e.preventDefault()
    const response = await axios.post(url + "/api/user/login",data);
    if(response.data.success){
      localStorage.setItem("token", response.data.token)    
      navigate('/')    
    }
    else{
      toast.error(response.data.message)
    }
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login
          <span className='text-blue-500'> TalkNet</span>
        </h1>

        <form onSubmit={onLogin}>
          <div>
            <label className='label p-2'>
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" value = {data.username}  onChange = {(e) => setData({...data,username:e.target.value})} placeholder='Enter username' className='w-full input input-bordered h-10'/>
          </div>
          <div>
            <label className='label p-2'>
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" value = {data.password} onChange = {(e) => setData({...data,password:e.target.value})} placeholder='Enter password' className='w-full input input-bordered h-10'/>
          </div>
          <Link to= "/signup" className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>
          <div>
            <button className='btn btn-block btn-sm mt-2'>Login</button>
          </div>
        </form>


      </div>
    </div>

  )
}

export default Login
