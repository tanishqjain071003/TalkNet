import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { useAuthContext } from '../../context/AuthContext';

const Profile = () => {
  const {url} = useAuthContext();
	const [user, setUser] = useState({});
	const token = localStorage.getItem("token")
	
	const getCurrentUser = async () =>{
		const response = await axios({
			method:"get",
			url:url+'/api/user/thisUser',
			headers:{token},
			})
		if(response.data.success){
			setUser(response.data.user.id)
		}
	}
	useEffect(()=>{
		getCurrentUser()
	},[token])
    const image = user.image;

  return (
    <div className='flex justify-start items-end'>
        <div className='flex gap-2 items-center p-2 py-1 cursor-pointer'>
          <div className='w-12 rounded-full'>
              <img className='rounded-full'src={url+'/images/'+image} alt='user'/>
          </div>
        <p className='ml-2 text-gray-200 font-semibold'>Hello, {user.fullName}</p>
        </div>
    </div>
  )
}

export default Profile