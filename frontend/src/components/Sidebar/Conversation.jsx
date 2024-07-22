import React, { useEffect } from 'react'
import { useSocketContext } from "../../context/SocketContext";
import useConversation from '../../zustand/useConversation.js'
import { useAuthContext } from '../../context/AuthContext.jsx';

const Conversation = ({lastIndex,item}) => {

  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelectedConversation = selectedConversation?._id ===  item._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(item._id);
  const {url} = useAuthContext();
  const image = item.image
  
  return (
    <>
    <div onClick = {()=> setSelectedConversation(item)}className={`flex h-20 gap-2 my-2 items-center hover:bg-teal-800 rounded-3xl p-2 py-1 cursor-pointer ${isSelectedConversation?"bg-gradient-to-r from-green-800 to-teal-900":""}`}>
        <div className={`avatar ${isOnline ? "online":""}`}>
 			    <div className='w-12 rounded-full '>
 						<img src={url+'/images/'+image} alt={item.fullName}/>
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
