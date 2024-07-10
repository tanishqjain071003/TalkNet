import React, { useEffect } from 'react'
import { useSocketContext } from "../../context/SocketContext";
import useConversation from '../../zustand/useConversation.js'

const Conversation = ({lastIndex,item}) => {

  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelectedConversation = selectedConversation?._id ===  item._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(item._id);
  
  return (
    <>
    <div onClick = {()=> setSelectedConversation(item)}className={`flex gap-2 items-center hover:bg-sky-500 p-2 py-1 cursor-pointer ${isSelectedConversation?"bg-sky-500":""}`}>
        <div className={`avatar ${isOnline ? "online":""}`}>
 			    <div className='w-12 rounded-full'>
 						<img src={item.profilePic === "" ?'https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png':item.profilePic} alt='user avatar'/>
 					</div>
 			</div>
            <div className='flex flex-col justify-between'>
                    <p className='font-bold text-gray-200 '>{item.fullName}</p>
            </div>
        </div>
      <div>
    </div>
    {!lastIndex ? <></>:<hr className="h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />}
    </>
        
  )
}

export default Conversation