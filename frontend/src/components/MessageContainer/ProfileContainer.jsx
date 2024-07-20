import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useAuthContext } from '../../context/AuthContext';

const ProfileContainer = ({selectedConversation,setShowProfile}) => {
    const {url} = useAuthContext();
  return (
    <>
    <div className='flex flex-col items-center justify-start mb-10 mt-10'>
        <div className='w-48 rounded-full'>
              <img className='rounded-full'src={url+'/images/'+selectedConversation.image} alt={selectedConversation.fullName}/>
          </div>
    </div>
    <div className='flex flex-col justify-start mb-auto gap-6'>
        <div className=''>
            <p className='text-start p-3 h-16 mx-6 rounded-3xl border-green-500 border-2 text-2xl text-white font-bold shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>Name : {selectedConversation.fullName}</p>
        </div>
        <div className=''>
            <p className='text-start p-3 h-16 mx-6 rounded-3xl border-green-500 border-2 text-2xl text-white font-bold shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>Username : {selectedConversation.username}</p>
        </div>
        <div className=''>
            <p className='text-start p-3 h-16 mx-6 rounded-3xl border-green-500 border-2 text-2xl text-white font-bold shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>Gender : {selectedConversation.gender}</p>
        </div>
    </div>
    <div onClick = {(item)=>{setShowProfile(!item)}}className='font-bold cursor-pointer mt-auto ml-4 mb-6' >
        <IoMdArrowRoundBack />
    </div>
    </>
    
  )
}

export default ProfileContainer
