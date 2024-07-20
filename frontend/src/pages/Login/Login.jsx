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
    <div className='flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-900 to-cyan-700 mt-52 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
      <div className='flex flex-col items-center justify-center min-w-96 h-full mt-auto mx-auto'>
        <div className='w-full flex flex-col p-6 items-center justify-center'>
          <h1 className='text-stone-900 text-3xl text-bold font-extrabold text-center'>
            Login
            <span className='text-green-400'> TalkNet</span>
          </h1>

          <form onSubmit={onLogin}>
            <div className='w-80'>
              <label className='label p-2'>
                <span className="text-base text-slate-950 font-semibold label-text">Username</span>
              </label>
              <input type="text" className='input input-bordered input-info w-full max-w-xs' value = {data.username}  onChange = {(e) => setData({...data,username:e.target.value})} placeholder='Enter username'/>
            </div>
            <div>
              <label className='label p-2'>
                <span className="text-base text-slate-950 font-semibold label-text">Password</span>
              </label>
              <input type="password"  className='input input-bordered input-info w-full max-w-xs' value = {data.password} onChange = {(e) => setData({...data,password:e.target.value})} placeholder='Enter password'/>
            </div>
            <div>
            <button className="btn btn-active btn-accent w-52 mt-4 rounded-3xl text-base">Log In</button>
            </div>
          </form>
        </div>
      </div>
      
      <div className='flex flex-col items-center  justify-start mr-8 gap-4'>
        <p className = 'text-green-400 text-3xl text-bold font-extrabold'>New Here?</p>
        <p className='text-xs text-slate-950 w-44'>Sign up to connect with people all over the world!</p>
        <Link to= "/signup" className=''>
          <button className="btn btn-active btn-accent w-48 rounded-3xl text-base">Sign In</button>
        </Link>
      </div>
    </div>
    

  )
}

export default Login
