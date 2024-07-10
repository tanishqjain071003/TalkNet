import React, { useEffect ,useState,useRef} from 'react'
import Message from './Message'
import axios from 'axios'
import useConversation from '../../zustand/useConversation.js'
import MessageSkeleton from '../../skeleton/MessageSkeleton.jsx'
import useGetMessages from '../../hooks/useGetMessages.js'
import useListenMessages from '../../hooks/useListenMessage.js'


const Messages = () => {
  const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);


  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}
        {!loading && messages.length === 0 && (
          <p className='text-center'>Send a message to start the conversation</p>
        )}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
     
    </div>
  )
}

export default Messages