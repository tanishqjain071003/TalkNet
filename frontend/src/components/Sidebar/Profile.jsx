import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { useAuthContext } from '../../context/AuthContext';
import LogoutButton from './LogoutButton';
import ProfileContainer from '../MessageContainer/ProfileContainer';

const Profile = () => {
  const {url} = useAuthContext();
	const [user, setUser] = useState({});
	const [showProfile,setShowProfile] = useState(false);
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
        <div onClick={()=>{setShowProfile(!showProfile)}} className='flex gap-2 items-center p-2 py-1 cursor-pointer'>
          <div className='w-12 rounded-full'>
              <img className='rounded-full'src={url+'/images/'+image} alt={user.fullName}/>
          </div>
        <p className='ml-1 text-gray-200 font-semibold'>Hello, {user.fullName}</p>
        </div>
		<div>
			<LogoutButton />
		</div>
   	 </div>
  )
}

export default Profile
