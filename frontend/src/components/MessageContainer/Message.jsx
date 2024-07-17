import React, { useEffect, useState } from 'react'
import { extractTime } from "../../utils/extractTime";
import useConversation from '../../zustand/useConversation.js'
import { useAuthContext } from '../../context/AuthContext.jsx';

const Message = ({message}) => {

	const { selectedConversation } = useConversation();
	const {url,user} = useAuthContext();

	const fromMe = message.senderId === user._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = chatClassName === "chat-end" ? user.image : selectedConversation.image;
	console.log(profilePic);
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <>
      <div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={url+'/images/'+profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
 </>
  )
}

export default Message
