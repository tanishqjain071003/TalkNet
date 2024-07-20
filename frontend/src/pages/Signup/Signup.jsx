import React, { useEffect, useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext'
import upload_img from "frontend/src/assets/upload_area.png"

const Signup = () => {
  const {url} = useAuthContext();
  const navigate = useNavigate();
  const [image, setImage] = useState(false);

  const [inputs, setInputs] = useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:"",
});

const handleCheckboxChange = (gender) => {
  setInputs({ ...inputs, gender });
};

const onSignup = async(e)=>{
  e.preventDefault();
  const formData = new FormData();
  formData.append("fullName", inputs.fullName);
  formData.append("username", inputs.username);
  formData.append("password", inputs.password);
  formData.append("confirmPassword", inputs.confirmPassword);
  formData.append("gender", inputs.gender);
  formData.append("image", image);
  console.log(formData);
  
  let response = await axios.post(url + "/api/user/signup",formData);
  if(response.data.success){
    localStorage.setItem("token", response.data.token)  
    setImage(false);  
    navigate('/')      
  }
  else{
    toast.error(response.data.message)
  }
}

  return (
    <>
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto mt-24 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]' >
        <div className='w-full p-6 rounded-lg bg-gradient-to-r from-emerald-900 to-cyan-700'>
          <h1 className='text-stone-900 text-3xl text-bold font-extrabold text-center'>
            Sign Up
            <span className='text-green-400'> TalkNet</span>
          </h1>
        

        <form onSubmit={onSignup}>
          <div>
            <label className='label p-2'>
              <span className="text-base text-slate-950 font-semibold label-text">Full Name</span>
            </label>
            <input required type="text" placeholder='Enter Full Name' className='input input-bordered input-info w-full max-w-xs'  value = {inputs.fullName} onChange={(e) => setInputs({...inputs, fullName:e.target.value})}/>
          </div>
          
          <div>
            <label className='label p-2'>
              <span className="text-base text-slate-950 font-semibold label-text">Username</span>
            </label>
            <input required type="text" placeholder='Enter Username' className='input input-bordered input-info w-full max-w-xs'  value = {inputs.username} onChange={(e) => setInputs({...inputs, username:e.target.value})}/>
          </div>

          <div>
            <label className='label p-2'>
              <span className="text-base text-slate-950 font-semibold label-text">Password</span>
            </label>
            <input required type="password" placeholder='Enter Password' className='input input-bordered input-info w-full max-w-xs'  value = {inputs.password} onChange={(e) => setInputs({...inputs, password:e.target.value})}/>
          </div>

          <div>
            <label className='label p-2'>
              <span className="text-base text-slate-950 font-semibold label-text">Confirm Password</span>
            </label>
            <input required type="password" placeholder='Confirm Password' className='input input-bordered input-info w-full max-w-xs'  value = {inputs.confirmPassword} onChange={(e) => setInputs({...inputs, confirmPassword:e.target.value})}/>
          </div>

          <div className='flex'>
            <div className='form-control'>
              <label className={`label gap-2 cursor-pointer ${inputs.gender === "Male" ? "selected":""}`}>
                <span className='text-base text-slate-950 font-semibold label-text'>Male</span>
                <input  type='checkbox' className='checkbox border-slate-900' checked={inputs.gender === "Male"} onChange={() => handleCheckboxChange("Male")} />
              </label>
            </div>
            <div className='form-control'>
              <label className={`label gap-2 cursor-pointer ${inputs.gender === "Female" ? "selected":""}`}>
                <span className='text-base text-slate-950 font-semibold label-text'>Female</span>
                <input  type='checkbox'  className='checkbox border-slate-900'checked={inputs.gender === "Female"} onChange={() => handleCheckboxChange("Female")} />
              </label>
            </div>
          </div>
          <div className='w-24 mb-2'>
                    <p className='text-sm text-slate-950 font-semibold label-text'>Upload image</p>
                    <label htmlFor="image">
                        <img src={!image ? upload_img: URL.createObjectURL(image)} alt="" />
                    </label>
                    <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" name = 'image' id = 'image' hidden required />
            </div>


					<Link to ='/login' className='text-base hover:text-zinc-700 duration-300 text-slate-950 font-semibold label-text' href='#'>
						Already have an account?
					</Link>

          <div>
            <button className='btn btn-active mt-2 btn-accent w-full rounded-3xl text-base'>
              Sign in
            </button>
          </div>


         </form>
        </div>
      </div>
    </>
  )
}

export default Signup
