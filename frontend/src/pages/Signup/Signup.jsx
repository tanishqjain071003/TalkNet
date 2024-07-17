import React, { useEffect, useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext'
import upload_img from "/Users/tanishqjain/Desktop/TalkNet/frontend/src/assets/upload_area.png"

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
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto' >
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Login
            <span className='text-blue-500'> TalkNet</span>
          </h1>
        

        <form onSubmit={onSignup}>
          <div>
            <label className='label p-2'>
              <span className="text-base label-text">Full Name</span>
            </label>
            <input required type="text" placeholder='Enter Full Name' className='w-full input input-bordered h-10'  value = {inputs.fullName} onChange={(e) => setInputs({...inputs, fullName:e.target.value})}/>
          </div>
          
          <div>
            <label className='label p-2'>
              <span className="text-base label-text">Username</span>
            </label>
            <input required type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'  value = {inputs.username} onChange={(e) => setInputs({...inputs, username:e.target.value})}/>
          </div>

          <div>
            <label className='label p-2'>
              <span className="text-base label-text">Password</span>
            </label>
            <input required type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'  value = {inputs.password} onChange={(e) => setInputs({...inputs, password:e.target.value})}/>
          </div>

          <div>
            <label className='label p-2'>
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input required type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10'  value = {inputs.confirmPassword} onChange={(e) => setInputs({...inputs, confirmPassword:e.target.value})}/>
          </div>

          <div className='flex'>
            <div className='form-control'>
              <label className={`label gap-2 cursor-pointer ${inputs.gender === "Male" ? "selected":""}`}>
                <span className='label-text'>Male</span>
                <input  type='checkbox' className='checkbox border-slate-900' checked={inputs.gender === "Male"} onChange={() => handleCheckboxChange("Male")} />
              </label>
            </div>
            <div className='form-control'>
              <label className={`label gap-2 cursor-pointer ${inputs.gender === "Female" ? "selected":""}`}>
                <span className='label-text'>Female</span>
                <input  type='checkbox'  className='checkbox border-slate-900'checked={inputs.gender === "Female"} onChange={() => handleCheckboxChange("Female")} />
              </label>
            </div>
          </div>
          <div className='w-24 mb-2'>
                    <p className='label-text'>Upload image</p>
                    <label htmlFor="image">
                        <img src={!image ? upload_img: URL.createObjectURL(image)} alt="" />
                    </label>
                    <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" name = 'image' id = 'image' hidden required />
            </div>


					<Link to ='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
						Already have an account?
					</Link>

          <div>
            <button className='btn btn-block btn-sm mt-2'>
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
